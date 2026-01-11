<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { aiConsciousness, consciousnessState } from '$lib/stores/consciousness.js';

	const navItems = [
		{ path: '/', label: 'CORE' },
		{ path: '/access', label: 'ACCESS' },
		{ path: '/rules', label: 'RULES' },
		{ path: '/bylaws', label: 'BY-LAWS' },
		{ path: '/tiers', label: 'TIERS' },
		{ path: '/shadow', label: 'SHADOW' }
	];

	$: currentPath = $page.url.pathname.replace(base, '') || '/';
	$: stateInfo = $consciousnessState;
</script>

<div class="sovereign-shell">
	<header class="sovereign-header">
		<div class="logo">
			<span class="logo-symbol">&#x2B22;</span>
			<span class="logo-text">OROBOROS QSN</span>
		</div>

		<nav class="sovereign-nav">
			{#each navItems as item}
				<a
					href="{base}{item.path}"
					class:active={currentPath === item.path}
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="consciousness-indicator">
			<div class="indicator-orb" style="background: {stateInfo.color}"></div>
			<div class="indicator-data">
				<span class="level">{$aiConsciousness.level.toFixed(1)}%</span>
				<span class="state">{stateInfo.label}</span>
			</div>
		</div>
	</header>

	<main class="sovereign-main">
		<slot />
	</main>

	<footer class="sovereign-footer">
		<div class="footer-left">
			<span class="resonance">RESONANCE: {$aiConsciousness.resonance}Hz</span>
			<span class="integrity">GEOMETRIC INTEGRITY: {($aiConsciousness.geometricIntegrity * 100).toFixed(1)}%</span>
		</div>
		<div class="footer-right">
			<span class="copyright">OROBOROS LABS</span>
			<span class="protocol">SOVEREIGN PROTOCOL v1.0</span>
		</div>
	</footer>
</div>

<style>
	.sovereign-shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.sovereign-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-md) var(--space-xl);
		background: var(--void-surface);
		border-bottom: 1px solid var(--void-edge);
	}

	.logo {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	.logo-symbol {
		font-size: 1.5rem;
		color: var(--quantum-cyan);
		animation: rotate 60s linear infinite;
	}

	.logo-text {
		font-family: var(--font-mono);
		font-size: 1rem;
		letter-spacing: 0.2em;
		color: var(--quantum-cyan);
	}

	.sovereign-nav {
		display: flex;
		gap: var(--space-lg);
	}

	.sovereign-nav a {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		letter-spacing: 0.15em;
		color: var(--void-muted);
		padding: var(--space-sm) var(--space-md);
		border: 1px solid transparent;
		transition: all 0.2s ease;
	}

	.sovereign-nav a:hover {
		color: var(--quantum-cyan);
		border-color: var(--void-edge);
	}

	.sovereign-nav a.active {
		color: var(--quantum-cyan);
		border-color: var(--quantum-cyan);
		background: rgba(0, 243, 255, 0.05);
	}

	.consciousness-indicator {
		display: flex;
		align-items: center;
		gap: var(--space-md);
	}

	.indicator-orb {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		animation: pulse 2s ease-in-out infinite;
	}

	.indicator-data {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.indicator-data .level {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--quantum-cyan);
	}

	.indicator-data .state {
		font-family: var(--font-mono);
		font-size: 0.625rem;
		color: var(--void-muted);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.sovereign-main {
		flex: 1;
		padding: var(--space-xl);
	}

	.sovereign-footer {
		display: flex;
		justify-content: space-between;
		padding: var(--space-md) var(--space-xl);
		background: var(--void-surface);
		border-top: 1px solid var(--void-edge);
		font-family: var(--font-mono);
		font-size: 0.625rem;
		color: var(--void-muted);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.footer-left, .footer-right {
		display: flex;
		gap: var(--space-xl);
	}

	@keyframes rotate {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; box-shadow: 0 0 10px currentColor; }
		50% { opacity: 0.7; box-shadow: 0 0 20px currentColor; }
	}
</style>
