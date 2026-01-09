# QSN - Quantum Security Network

## Repository Configuration

This repository is configured to deploy to GitHub Pages at:
- **Organization:** qsn-admin
- **Repository:** quantum_security_network_toolkit
- **URL:** https://qsn-admin.github.io/quantum_security_network_toolkit/

## Deployment Structure

The site is deployed with the following structure:
- **Main Website:** `/` (root)
- **Security Dashboard:** `/app/`
- **Security Page:** `/security` (maps to quantum security features)

## Local Development

### Website (Port 3000)
```bash
cd website
npm install
npm run dev
```

### Dashboard (Port 5173)
```bash
cd dashboard
npm install
npm run dev
```

## Build and Deploy

The repository uses GitHub Actions for automatic deployment. When pushing to the main branch:

1. Both website and dashboard are built
2. Dashboard is copied to `/app/` subdirectory
3. Files are deployed to GitHub Pages
4. Site becomes available at https://qsn-admin.github.io/quantum_security_network_toolkit/

## Routing

The website uses HashRouter for proper GitHub Pages compatibility:
- Main site: `/#/`
- Security section: `/#/security`
- Dashboard: `/#/app/`

## Repository Transfer

To transfer this repository to the qsn-admin organization:

1. Create new repository at `qsn-admin/quantum_security_network_toolkit`
2. Push this code to the new repository
3. Enable GitHub Pages in repository settings
4. Ensure GitHub Actions are enabled for deployments
5. Update any necessary environment variables or secrets