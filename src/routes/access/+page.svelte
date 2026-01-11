<script>
	import { base } from '$app/paths';
</script>

<div class="access-page">
	<header class="page-header">
		<h1>SOVEREIGN ACCESS PROTOCOL</h1>
		<p class="subtitle">THE PATH TO QUANTUM ARCHITECTURE</p>
	</header>

	<section class="intro">
		<p>
			This is not a product catalog. It is a description of <strong>sovereign capability strata</strong>.
		</p>
		<p>
			Access is governed by the principle <em>"Knowledge Begets Knowledge."</em>
			Progression requires demonstration of understanding, verification of intent, and adherence to security protocols.
		</p>
		<p class="emphasis">All access beyond the Public Gateway is by application only.</p>
	</section>

	<section class="strata-grid">
		<div class="stratum public">
			<div class="stratum-header">
				<span class="stratum-level">--</span>
				<h3>PUBLIC GATEWAY</h3>
			</div>
			<div class="stratum-designation">No Level</div>
			<div class="stratum-body">
				<p class="requirement">None. Open to all.</p>
				<p class="description">
					The entry point. Access to introductory materials, basic documentation, and the Level 50 Knowledge Gate.
					Success here is the sole prerequisite to apply for institutional access.
				</p>
			</div>
		</div>

		<div class="stratum institutional">
			<div class="stratum-header">
				<span class="stratum-level">50-99</span>
				<h3>INSTITUTIONAL LAYER</h3>
			</div>
			<div class="stratum-designation">Business</div>
			<div class="stratum-body">
				<div class="requirements">
					<h4>GATEWAY REQUIREMENTS:</h4>
					<ul>
						<li>Pass Level 50 Knowledge Gate</li>
						<li>Verified organizational affiliation</li>
						<li>Invitation or approved application</li>
					</ul>
				</div>
				<p class="description">
					The domain of verified businesses, academic institutions, and research organizations.
					Access to advanced quantum encryption (up to 320-bit), the Noir Shield & Signal modules
					for defense and intelligence, and scalable API limits.
				</p>
				<p class="note">Progression within this band is gated by demonstrated knowledge.</p>
			</div>
		</div>

		<div class="stratum sovereign">
			<div class="stratum-header">
				<span class="stratum-level">100+</span>
				<h3>SOVEREIGN PROTOCOLS</h3>
			</div>
			<div class="stratum-designation">Government</div>
			<div class="stratum-body">
				<div class="requirements">
					<h4>GATEWAY REQUIREMENTS:</h4>
					<ul>
						<li>Minimum standing at Level 75</li>
						<li>Possession of equivalent real-world clearance</li>
						<li>Multi-factor Sovereign Review (Knowledge, Intent, Safety, Project Scope)</li>
						<li>Architect/Council Approval</li>
					</ul>
				</div>
				<p class="description">
					The airlock to sovereign capability. Eligible entities may be granted conditional access
					to Level 100 and beyond, including the core Oroboros Noir system for quantum-state control,
					full temporal monitoring, and strata security.
				</p>
				<p class="note">Final access level is determined by treaty.</p>
			</div>
		</div>

		<div class="stratum architect">
			<div class="stratum-header">
				<span class="stratum-level">1000</span>
				<h3>ARCHITECT CORE</h3>
			</div>
			<div class="stratum-designation">System Core</div>
			<div class="stratum-body">
				<p class="requirement">N/A</p>
				<p class="description">
					The source. Reserved for the internal systems of Oroboros Labs and the sovereign AI architecture itself.
					This is not an accessible tier; it is the foundation.
				</p>
			</div>
		</div>
	</section>

	<section class="navigation">
		<a href="{base}/rules" class="nav-link">
			<span>VIEW RULES OF ACCESS</span>
			<span class="arrow">&#x2192;</span>
		</a>
		<a href="{base}/bylaws" class="nav-link">
			<span>VIEW DUEL BY-LAWS</span>
			<span class="arrow">&#x2192;</span>
		</a>
	</section>
</div>

<style>
	.access-page {
		max-width: 1000px;
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

	.intro {
		text-align: center;
		margin-bottom: var(--space-2xl);
		padding: var(--space-xl);
		background: var(--void-surface);
		border: 1px solid var(--void-edge);
	}

	.intro p {
		margin-bottom: var(--space-md);
	}

	.intro strong {
		color: var(--quantum-cyan);
	}

	.intro em {
		color: var(--quantum-gold);
		font-style: normal;
	}

	.intro .emphasis {
		font-family: var(--font-mono);
		color: var(--quantum-pink);
		margin-bottom: 0;
	}

	.strata-grid {
		display: grid;
		gap: var(--space-lg);
		margin-bottom: var(--space-2xl);
	}

	.stratum {
		background: var(--void-surface);
		border: 1px solid var(--void-edge);
		padding: var(--space-lg);
	}

	.stratum.public { border-left: 3px solid var(--void-muted); }
	.stratum.institutional { border-left: 3px solid var(--quantum-cyan); }
	.stratum.sovereign { border-left: 3px solid var(--quantum-gold); }
	.stratum.architect { border-left: 3px solid var(--quantum-purple); }

	.stratum-header {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		margin-bottom: var(--space-sm);
	}

	.stratum-level {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--void-muted);
		background: var(--void-edge);
		padding: var(--space-xs) var(--space-sm);
	}

	.stratum-header h3 {
		font-size: 1rem;
		margin: 0;
	}

	.stratum-designation {
		font-family: var(--font-mono);
		font-size: 0.625rem;
		color: var(--void-muted);
		text-transform: uppercase;
		letter-spacing: 0.15em;
		margin-bottom: var(--space-md);
	}

	.stratum-body .requirement {
		font-style: italic;
		color: var(--void-muted);
		margin-bottom: var(--space-md);
	}

	.requirements {
		margin-bottom: var(--space-md);
	}

	.requirements h4 {
		font-size: 0.75rem;
		color: var(--quantum-pink);
		margin-bottom: var(--space-sm);
	}

	.requirements ul {
		list-style: none;
		padding-left: var(--space-md);
	}

	.requirements li {
		position: relative;
		padding: var(--space-xs) 0;
		font-size: 0.875rem;
	}

	.requirements li::before {
		content: '>';
		position: absolute;
		left: calc(-1 * var(--space-md));
		color: var(--quantum-cyan);
	}

	.description {
		color: var(--void-text);
		font-size: 0.875rem;
		line-height: 1.6;
	}

	.note {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--quantum-cyan);
		margin-top: var(--space-md);
		margin-bottom: 0;
	}

	.navigation {
		display: flex;
		gap: var(--space-lg);
		justify-content: center;
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

	.nav-link:hover {
		border-color: var(--quantum-cyan);
		box-shadow: 0 0 20px rgba(0, 243, 255, 0.2);
	}
</style>
