# Sentinel Facade - Installation Guide

## Overview
This package integrates a secure public dashboard (Sentinel Facade) into your existing QSNT/Oroboros Net site. It creates a controlled interface that communicates with your secure `mcp-gateway-1`.

## Files to Install
1.  **Update** your existing `index.html` (adds the secure "proceed" function).
2.  **Create** the new `dashboard.html` (main interface).
3.  **Create** the new CSS file: `css/dashboard.css`.
4.  **Create** the two JavaScript modules: `js/auth.js` and `js/sentinel-gateway.js`.

## Installation Steps
1.  **Backup** your current site.
2.  **Add/Update Files**: Place the new files in the directory structure shown above.
3.  **Update Paths**: Ensure all file paths in `dashboard.html` (CSS, JS) are correct for your hosting environment.
4.  **Configure the Gateway**:
    *   In `js/sentinel-gateway.js`, update `gatewayBaseUrl` to point to your actual `mcp-gateway-1` public API endpoint (e.g., `'https://mcp-gateway-1:3002/public-api/v1'`).

## Post-Installation
- The existing sovereign warning page (`index.html` / the Svelte landing page) will now set a mock token and redirect to the dashboard at `dashboard.html`.
- The dashboard is functional with simulated data. To connect it to your live Oroboros Net:
    1.  Implement the corresponding `/public-api/v1/` endpoints on your `mcp-gateway-1`.
    2.  Replace the simulated data functions in `dashboard.html` with real calls to `SentinelGateway`.
    3.  Implement proper token authentication between the gateway and your lab net.

## Security Note
This frontend code is designed to be safe for public exposure—it contains no secrets or internal logic. All security enforcement must happen at your `mcp-gateway-1` and within your lab network's "data washer" services.

## Testing
1.  Open your site. The sovereign warning should appear.
2.  Click to proceed. You should be redirected to the Sentinel Facade dashboard.
3.  Navigate between panels (Status, Control, Query, Logs).
4.  Try initiating a control action (Flush, Export) to see the confirmation modal.

---
**Oroboros QSN - Sovereign Architecture**
