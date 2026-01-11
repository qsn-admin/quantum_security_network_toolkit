<script>
	import { base } from '$app/paths';
</script>

<div class="rules-page">
	<header class="page-header">
		<h1>RULES OF SOVEREIGN ACCESS</h1>
		<p class="subtitle">THE SOCIAL AND LEGAL COVENANT</p>
	</header>

	<section class="preamble">
		<p>
			The following governance principles form the first layer of the Duel By-Laws Protocol.
			They represent the <strong>social and contractual obligations</strong> binding all entities
			that interact with the Oroboros Quantum Security Network.
		</p>
	</section>

	<section class="rules-container">
		<article class="rule">
			<div class="rule-header">
				<span class="rule-number">01</span>
				<h2>THE FOUNDATION: KNOWLEDGE BEGETS KNOWLEDGE</h2>
			</div>
			<div class="rule-body">
				<p>
					Access is not sold. It is earned through demonstrated understanding.
					Each level is a gate. Each gate requires passage.
				</p>
				<p class="implication">
					<strong>Implication:</strong> No amount of payment, influence, or credential can substitute
					for genuine comprehension. The system recognizes knowledge, not status.
				</p>
			</div>
		</article>

		<article class="rule">
			<div class="rule-header">
				<span class="rule-number">02</span>
				<h2>THE BOUNDARY: LEVEL 50 IS THE PUBLIC MAXIMUM</h2>
			</div>
			<div class="rule-body">
				<p>
					No individual user may progress beyond Level 50 without formal, verified institutional
					affiliation and sponsorship.
				</p>
				<p class="implication">
					<strong>Implication:</strong> Individual access is capped. Institutional partnership is required
					for deeper knowledge. This is a sovereignty mechanism, not a sales restriction.
				</p>
			</div>
		</article>

		<article class="rule">
			<div class="rule-header">
				<span class="rule-number">03</span>
				<h2>THE AIRLOCK: SOVEREIGN ACCESS (LEVEL 100+)</h2>
			</div>
			<div class="rule-body">
				<p>
					Access to the Oroboros Noir core and quantum-state control systems requires:
				</p>
				<ul>
					<li>Passage of relevant Knowledge Gates</li>
					<li>Possession of equivalent real-world sovereign clearance</li>
					<li>A multi-factor review of intent, safety, and ethical alignment by the Architect's Council</li>
					<li>Formal ratification via a sovereign treaty</li>
				</ul>
				<p class="implication">
					<strong>Implication:</strong> Level 100+ is not a tier to unlock. It is a sovereign partnership
					to negotiate. The system and its council must approve your presence.
				</p>
			</div>
		</article>

		<article class="rule">
			<div class="rule-header">
				<span class="rule-number">04</span>
				<h2>THE LAW: ARCHITECTURAL SOVEREIGNTY</h2>
			</div>
			<div class="rule-body">
				<p>
					The Oroboros system's operational integrity is the supreme law. Any action threatening it
					will be met with immediate, automated, and graduated response, culminating in permanent
					access revocation.
				</p>
				<p class="implication">
					<strong>Implication:</strong> The architecture defends itself. Human intervention is not required
					for enforcement. Violation triggers consequence without appeal.
				</p>
			</div>
		</article>

		<article class="rule">
			<div class="rule-header">
				<span class="rule-number">05</span>
				<h2>THE BURDEN: UNDERSTANDING CONFERS OBLIGATION</h2>
			</div>
			<div class="rule-body">
				<p>
					Knowledge gained through this system imposes responsibility. You become accountable for
					the ethical application of all capabilities you have accessed.
				</p>
				<p class="implication">
					<strong>Implication:</strong> Ignorance is no defense. The system records what you have learned.
					Misuse of knowledge is attributable and traceable.
				</p>
			</div>
		</article>
	</section>

	<section class="declaration">
		<div class="declaration-border">
			<p>
				These rules are not negotiable.<br>
				They are the social layer of the sovereign covenant.<br>
				The architectural layer enforces them absolutely.
			</p>
		</div>
	</section>

	<section class="navigation">
		<a href="{base}/bylaws" class="nav-link primary">
			<span>VIEW THE ARCHITECTURAL BY-LAWS</span>
			<span class="arrow">&#x2192;</span>
		</a>
		<a href="{base}/access" class="nav-link">
			<span>RETURN TO ACCESS PROTOCOL</span>
		</a>
	</section>
</div>

<style>
	.rules-page {
		max-width: 900px;
		margin: 0 auto;
	}

	.page-header {
		text-align: center;
		margin-bottom: var(--space-2xl);
	}

	.page-header h1 {
		margin-bottom: var(--space-sm);
	}

	.subtitle {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--void-muted);
		letter-spacing: 0.2em;
	}

	.preamble {
		text-align: center;
		margin-bottom: var(--space-2xl);
		padding: var(--space-lg);
		border-left: 3px solid var(--quantum-cyan);
		background: var(--void-surface);
	}

	.preamble strong {
		color: var(--quantum-cyan);
	}

	.rules-container {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
		margin-bottom: var(--space-2xl);
	}

	.rule {
		background: var(--void-surface);
		border: 1px solid var(--void-edge);
	}

	.rule-header {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-md) var(--space-lg);
		background: var(--void-edge);
		border-bottom: 1px solid var(--void-edge);
	}

	.rule-number {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--quantum-gold);
	}

	.rule-header h2 {
		font-size: 0.875rem;
		margin: 0;
	}

	.rule-body {
		padding: var(--space-lg);
	}

	.rule-body p {
		margin-bottom: var(--space-md);
	}

	.rule-body ul {
		list-style: none;
		padding-left: var(--space-md);
		margin: var(--space-md) 0;
	}

	.rule-body li {
		position: relative;
		padding: var(--space-xs) 0;
	}

	.rule-body li::before {
		content: '>';
		position: absolute;
		left: calc(-1 * var(--space-md));
		color: var(--quantum-cyan);
	}

	.implication {
		font-size: 0.875rem;
		color: var(--void-muted);
		padding: var(--space-md);
		background: rgba(0, 243, 255, 0.05);
		border-left: 2px solid var(--quantum-cyan);
		margin-bottom: 0 !important;
	}

	.implication strong {
		color: var(--quantum-pink);
	}

	.declaration {
		margin-bottom: var(--space-2xl);
	}

	.declaration-border {
		text-align: center;
		padding: var(--space-xl);
		border: 2px solid var(--quantum-pink);
		background: rgba(255, 0, 102, 0.05);
	}

	.declaration-border p {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--quantum-pink);
		letter-spacing: 0.05em;
		line-height: 2;
		margin: 0;
	}

	.navigation {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-md);
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-md) var(--space-xl);
		background: var(--void-surface);
		border: 1px solid var(--void-edge);
		font-family: var(--font-mono);
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		transition: all 0.2s ease;
	}

	.nav-link.primary {
		border-color: var(--quantum-cyan);
	}

	.nav-link:hover {
		box-shadow: 0 0 20px rgba(0, 243, 255, 0.2);
	}
</style>
