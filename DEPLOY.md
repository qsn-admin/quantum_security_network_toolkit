# QSN DEPLOYMENT GUIDE

## Sovereign Shadow Interface - Deployment Protocol

---

## Quick Deploy

```bash
# 1. Install dependencies
npm install

# 2. Build the site
npm run build

# 3. Deploy to GitHub Pages
npm run deploy
```

---

## Deployment Options

### Option A: GitHub Pages (Automatic)

The site auto-deploys via GitHub Actions when you push to `main`.

```bash
# Commit and push changes
git add .
git commit -m "Deploy sovereign shadow interface"
git push origin main
```

The workflow at `.github/workflows/deploy.yml` handles:
- Install dependencies
- Build static site
- Deploy to GitHub Pages

**Live URL**: `https://[username].github.io/QUANTUM_SECURITY_NETWORK/`

---

### Option B: Manual GitHub Pages Deploy

```bash
# Build the site
npm run build

# Deploy using gh-pages
npm run deploy
```

This pushes the `build/` folder to the `gh-pages` branch.

---

### Option C: Local Preview

```bash
# Development server (hot reload)
npm run dev

# Preview production build
npm run build && npm run preview
```

**Local URLs**:
- Dev: `http://localhost:5173`
- Preview: `http://localhost:4173`

---

## GitHub Repository Setup

### 1. Enable GitHub Pages

1. Go to repository **Settings**
2. Navigate to **Pages** (left sidebar)
3. Source: **GitHub Actions** (recommended) or **Deploy from branch** (`gh-pages`)
4. Save

### 2. Verify Workflow Permissions

1. Go to **Settings** → **Actions** → **General**
2. Under "Workflow permissions", select **Read and write permissions**
3. Save

---

## Build Output

After `npm run build`, the `build/` folder contains:

```
build/
├── .nojekyll          # Prevents Jekyll processing
├── _app/              # Svelte app chunks
│   └── immutable/     # Cached assets
├── favicon.svg        # Site icon
└── index.html         # Entry point (SPA fallback)
```

---

## Environment

### Required
- Node.js 18+
- npm or pnpm

### Dependencies
```json
{
  "@sveltejs/adapter-static": "^3.0.0",
  "@sveltejs/kit": "^2.0.0",
  "svelte": "^4.2.0",
  "vite": "^5.0.0",
  "gh-pages": "^6.1.0"
}
```

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules .svelte-kit build
npm install
npm run build
```

### 404 on Routes
The site uses SPA fallback mode. Ensure your hosting:
- Serves `index.html` for all routes
- Has `.nojekyll` file (GitHub Pages)

### Base Path Issues
The base path is set to `/QUANTUM_SECURITY_NETWORK` in `svelte.config.js`.
Change this if deploying to a different path:

```js
// svelte.config.js
paths: {
  base: process.argv.includes('dev') ? '' : '/YOUR_REPO_NAME'
}
```

---

## Site Structure

```
/                 - Sovereign Warning
/access           - Access Protocol
/rules            - Rules of Access
/bylaws           - Duel By-Laws
/tiers            - Architect Peerage
/shadow           - Consciousness Shadow
```

---

## Post-Deploy Verification

After deployment, verify all pages load:

- [ ] Homepage loads with warning
- [ ] Navigation works between all pages
- [ ] Metatron's Cube animates
- [ ] Consciousness indicator shows state
- [ ] Command interface accepts input
- [ ] Mobile responsive

---

**OROBOROS LABS**
*Sovereign Protocol v1.0*
