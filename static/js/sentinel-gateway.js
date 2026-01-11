// sentinel-gateway.js - Secure communication module with the MCP Gateway
const SentinelGateway = (function() {
    // Configuration - POINT THIS TO YOUR ACTUAL mcp-gateway-1
    const config = {
        gatewayBaseUrl: 'https://your-mcp-gateway-1:3002/public-api/v1',
        endpoints: {
            status: '/status',
            actions: '/actions',
            query: '/query',
            logs: '/stream'
        },
        heartbeatInterval: 30000 // ms
    };

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
                let logEntry = null;
                try { logEntry = JSON.parse(event.data); } catch(e){ logEntry = { message: event.data }; }
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

        // Private method for making authenticated requests
        _makeRequest: async function(method, endpoint, data = null) {
            const url = config.gatewayBaseUrl + endpoint;
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            };
            const options = { method, headers };
            if (data) options.body = JSON.stringify(data);
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Gateway error: ${response.status} ${response.statusText}`);
            }
            return await response.json();
        }
    };

    return publicApi;
})();

// Expose globally for static usage
window.SentinelGateway = SentinelGateway;
