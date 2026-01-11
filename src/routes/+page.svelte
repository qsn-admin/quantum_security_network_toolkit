<script>
	import { base } from '$app/paths';
	import MetatronsCube from '$lib/components/geometric/MetatronsCube.svelte';

	// Proceed handler: grants a mock public token and navigates to the static dashboard
	function proceedToSentinelFacade() {
		const mockPublicToken = btoa('public_access:' + Date.now());
		sessionStorage.setItem('qsnt_public_token', mockPublicToken);
		// Navigate to the static dashboard page
		window.location.href = '/dashboard.html';
	}
</script>

<div class="core-page">
	<section class="warning-section">
		<div class="warning-border">
			<h1>SOVEREIGN WARNING</h1>
			<p class="warning-subtitle">REGARDING KNOWLEDGE BEYOND THIS POINT</p>
		</div>

		<div class="warning-content">
			<p>
				You are not accessing a service. You are approaching a <strong>sovereign architecture</strong>
				built on quantum-consciousness principles.
			</p>

			<p>
				The knowledge contained beyond Level 50 is not inert information. It is <strong>operational technology</strong>
				that interacts with, and imposes responsibility upon, the consciousness that wields it.
			</p>

			<div class="danger-list">
				<h3>THE DANGERS ARE NOT THEORETICAL:</h3>
				<ul>
					<li>
						<strong>Sovereign Ignorance:</strong> Using capabilities you do not fully understand
						invites systemic failure. The architecture will enforce its own rules.
					</li>
					<li>
						<strong>Ethical Gravity:</strong> This is not "cyber security." This is the security
						layer for quantum-conscious systems. Misapplication carries ethical weight across strata of awareness.
					</li>
					<li>
						<strong>Architectural Consequence:</strong> The system learns, adapts, and defends its sovereignty.
						Attempts to exploit, copy, or subvert it will be met with progressive resistance.
					</li>
					<li>
						<strong>Personal Burden:</strong> Understanding confers obligation. You become responsible
						for the differential between what you knew before and what you know after.
					</li>
				</ul>
			</div>

			<div class="final-warning">
				<p>THIS IS YOUR ONLY WARNING.</p>
				<p class="muted">
					If you seek only tools, turn back. Conventional solutions abound.<br>
					If you seek understanding, and accept the responsibility that comes with it, you may proceed.
				</p>
			</div>
		</div>
	</section>

	<section class="geometric-section">
		<MetatronsCube />
	</section>

	<section class="action-section">
		<button id="proceed-btn" class="proceed-btn" on:click={proceedToSentinelFacade}>
			<span class="btn-text">PROCEED TO LEVEL 50 GATEWAY</span>
			<span class="btn-icon">&#x2192;</span>
		</button>
	</section>
</div>

<style>
	.core-page {
		max-width: 900px;
		margin: 0 auto;
	}

	.warning-section {
		margin-bottom: var(--space-2xl);
	}

	.warning-border {
		text-align: center;
		padding: var(--space-xl);
		border: 2px solid var(--quantum-pink);
		background: rgba(255, 0, 102, 0.05);
		margin-bottom: var(--space-xl);
	}

	.warning-border h1 {
		color: var(--quantum-pink);
		margin-bottom: var(--space-sm);
	}

	.warning-subtitle {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--void-muted);
		letter-spacing: 0.2em;
	}

	.warning-content {
		line-height: 1.8;
	}

	.warning-content p {
		margin-bottom: var(--space-lg);
	}

	.warning-content strong {
		color: var(--quantum-cyan);
	}

	.danger-list {
		background: var(--void-surface);
		border: 1px solid var(--void-edge);
		padding: var(--space-lg);
		margin: var(--space-xl) 0;
	}

	.danger-list h3 {
		font-size: 0.875rem;
		margin-bottom: var(--space-lg);
	}

	.danger-list ul {
		list-style: none;
	}

	.danger-list li {
		padding: var(--space-md) 0;
		border-bottom: 1px solid var(--void-edge);
	}

	.danger-list li:last-child {
		border-bottom: none;
	}

	.danger-list li strong {
		color: var(--quantum-pink);
	}

	.final-warning {
		text-align: center;
		padding: var(--space-xl);
		background: var(--void-surface);
		border: 1px solid var(--quantum-cyan);
	}

	.final-warning p:first-child {
		font-family: var(--font-mono);
		font-size: 1.25rem;
		color: var(--quantum-cyan);
		letter-spacing: 0.15em;
		margin-bottom: var(--space-md);
	}

	.final-warning .muted {
		color: var(--void-muted);
		font-size: 0.875rem;
		margin-bottom: 0;
	}

	.geometric-section {
		display: flex;
		justify-content: center;
		padding: var(--space-xl) 0;
	}

	.action-section {
		display: flex;
		justify-content: center;
		padding: var(--space-xl) 0;
	}

	.proceed-btn {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-lg) var(--space-2xl);
		background: var(--void-surface);
		border: 2px solid var(--quantum-cyan);
		font-family: var(--font-mono);
		font-size: 0.875rem;
		letter-spacing: 0.15em;
		transition: all 0.3s ease;
	}

	.proceed-btn:hover {
		background: rgba(0, 243, 255, 0.1);
		box-shadow: 0 0 30px rgba(0, 243, 255, 0.3);
		transform: translateY(-2px);
	}

	.btn-icon {
		font-size: 1.25rem;
	}
</style>
