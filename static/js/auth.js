// auth.js - Simple session token management for the Sentinel Facade
const QSNT_Auth = {
    token: null,
    tokenKey: 'qsnt_public_token',

    init: function() {
        this.token = sessionStorage.getItem(this.tokenKey);
        if (!this.token) {
            console.warn('QSNT_Auth: No valid session token found.');
            return false;
        }
        console.log('QSNT_Auth: Session token loaded.');
        return true;
    },

    getToken: function() {
        return this.token;
    },

    // This would be expanded to validate token with the gateway
    validateWithGateway: async function(gatewayUrl) {
        if (!this.token) return { valid: false, reason: 'No token' };
        try {
            // Example validation call
            const response = await fetch(`${gatewayUrl}/validate`, {
                headers: { 'Authorization': `Bearer ${this.token}` }
            });
            return await response.json();
        } catch (error) {
            console.error('QSNT_Auth: Validation failed:', error);
            return { valid: false, reason: 'Network error' };
        }
    },

    clearSession: function() {
        sessionStorage.removeItem(this.tokenKey);
        this.token = null;
        console.log('QSNT_Auth: Session cleared.');
    }
};

// Expose globally for static usage
window.QSNT_Auth = QSNT_Auth;
