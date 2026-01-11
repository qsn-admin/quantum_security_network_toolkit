// sentinel-gateway.js - Secure communication module with the MCP Gateway
const SentinelGateway = (function() {
    // Configuration - can be overridden by `window.SENTINEL_CONFIG` on static pages
    const config = Object.assign({
        gatewayBaseUrl: 'https://your-mcp-gateway-1:3002/public-api/v1',
        endpoints: {
            status: '/status',
            actions: '/actions',
            query: '/query',
            logs: '/stream'
        },
        heartbeatInterval: 30000 // ms
    }, (window && window.SENTINEL_CONFIG) ? window.SENTINEL_CONFIG : {});

    let authToken = null;
    let eventSource = null;
    let isConnected = false;

    // Public API
    const publicApi = {
        init: function(token) {
            authToken = token;
            console.log('SentinelGateway: Initialized with token.');
            this.startHeartbeat();
            this.updateConnectionStatus(true);
        },

        fetchStatus: async function() {
            try {
                const response = await this._makeRequest('GET', config.endpoints.status);
                return response;
            } catch (error) {
                console.error('SentinelGateway: Failed to fetch status:', error);
                this.updateConnectionStatus(false);
                throw error;
            }
        },

        executeAction: async function(action, parameters = {}) {
            if (!action) throw new Error('Action type is required.');
            const payload = { action, parameters, timestamp: new Date().toISOString() };
            try {
                const response = await this._makeRequest('POST', config.endpoints.actions, payload);
                return response;
            } catch (error) {
                console.error(`SentinelGateway: Action "${action}" failed:`, error);
                throw error;
            }
        },

        submitQuery: async function(queryType, options = {}) {
            const payload = { query: queryType, options };
            try {
                const response = await this._makeRequest('POST', config.endpoints.query, payload);
                return response;
            } catch (error) {
                console.error(`SentinelGateway: Query "${queryType}" failed:`, error);
                throw error;
            }
        },

        startLogStream: function(onLogEntry) {
            if (eventSource) this.stopLogStream();
            const streamUrl = `${config.gatewayBaseUrl}${config.endpoints.logs}?token=${encodeURIComponent(authToken)}`;
            eventSource = new EventSource(streamUrl);
            eventSource.onmessage = (event) => {
                const logEntry = JSON.parse(event.data);
                if (onLogEntry && typeof onLogEntry === 'function') {
                    onLogEntry(logEntry);
                }
            };
            eventSource.onerror = (error) => {
                console.error('SentinelGateway: Log stream error:', error);
                this.updateConnectionStatus(false);
            };
            console.log('SentinelGateway: Log stream started.');
        },

        stopLogStream: function() {
            if (eventSource) {
                eventSource.close();
                eventSource = null;
                console.log('SentinelGateway: Log stream stopped.');
            }
        },

        startHeartbeat: function() {
            setInterval(() => {
                this.fetchStatus().then(status => {
                    this.updateConnectionStatus(true);
                }).catch(() => {
                    this.updateConnectionStatus(false);
                });
            }, config.heartbeatInterval);
        },

        updateConnectionStatus: function(connected) {
            isConnected = connected;
            const statusEl = document.getElementById('connection-status');
            if (statusEl) {
                statusEl.innerHTML = connected
                    ? '<i class="fas fa-link"></i> Connected'
                    : '<i class="fas fa-unlink"></i> Disconnected';
                statusEl.className = connected ? 'connected' : 'disconnected';
            }
        },

        // Private method for making authenticated requests with timeout and safe JSON parsing
        _makeRequest: async function(method, endpoint, data = null, timeout = 8000) {
            const url = config.gatewayBaseUrl + endpoint;
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            };
            const options = { method, headers };
            if (data) options.body = JSON.stringify(data);

            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), timeout);
            try {
                const resp = await fetch(url, { ...options, signal: controller.signal });
                clearTimeout(id);
                if (!resp.ok) {
                    throw new Error(`Gateway error: ${resp.status} ${resp.statusText}`);
                }
                const text = await resp.text();
                try {
                    return JSON.parse(text);
                } catch (e) {
                    // Not JSON — return raw text
                    return { ok: true, data: text };
                }
            } catch (err) {
                clearTimeout(id);
                throw err;
            }
        }
    };

    return publicApi;
})();

// Expose as a global for static pages
window.SentinelGateway = SentinelGateway;
