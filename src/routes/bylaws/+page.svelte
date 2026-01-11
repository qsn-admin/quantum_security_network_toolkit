<script>
	import { base } from '$app/paths';
</script>

<div class="bylaws-page">
	<header class="page-header">
		<h1>DUEL BY-LAWS PROTOCOL</h1>
		<p class="subtitle">THE ARCHITECTURAL COVENANT</p>
	</header>

	<section class="preamble">
		<div class="duel-explanation">
			<h3>THE DUEL STRUCTURE</h3>
			<p>
				Each governance principle exists in <strong>two complementary forms</strong>:
			</p>
			<div class="duel-forms">
				<div class="form social">
					<span class="form-label">LAYER 1</span>
					<span class="form-name">SOCIAL/LEGAL FRAME</span>
					<p>The human-readable covenant. The social contract.</p>
				</div>
				<div class="form-separator">+</div>
				<div class="form technical">
					<span class="form-label">LAYER 2</span>
					<span class="form-name">ARCHITECTURAL/TECHNICAL FRAME</span>
					<p>The mathematical truth. The encoded reality.</p>
				</div>
			</div>
			<p class="conclusion">
				Denial of knowledge requires arguing against <em>both</em> realities simultaneously.
				This is the "no way off" logical trap.
			</p>
		</div>
	</section>

	<section class="bylaws-container">
		<article class="bylaw">
			<div class="bylaw-header">
				<span class="bylaw-id">A1</span>
				<h2>INSTITUTIONAL KNOWLEDGE COVENANT</h2>
			</div>
			<div class="bylaw-body">
				<div class="frame social">
					<h4>SOCIAL/LEGAL FRAME:</h4>
					<p>
						Passage of the Level 50 Knowledge Gate is a non-negotiable prerequisite for application.
						It represents a demonstrable commitment to understanding the foundational security
						principles of the network.
					</p>
				</div>
				<div class="frame technical">
					<h4>ARCHITECTURAL/TECHNICAL FRAME:</h4>
					<p>
						The system's authentication layer is hard-coded to reject all applications where the
						<code>user.has_passed_level_50</code> flag is not <code>TRUE</code>. The gate is a
						binary checkpoint in the sovereign architecture; no human and no system can bypass
						this encoded requirement.
					</p>
				</div>
			</div>
		</article>

		<article class="bylaw">
			<div class="bylaw-header">
				<span class="bylaw-id">A2</span>
				<h2>INSTITUTIONAL VERIFICATION COVENANT</h2>
			</div>
			<div class="bylaw-body">
				<div class="frame social">
					<h4>SOCIAL/LEGAL FRAME:</h4>
					<p>
						Applicants must provide verifiable proof of legitimate organizational status.
						Falsification terminates eligibility.
					</p>
				</div>
				<div class="frame technical">
					<h4>ARCHITECTURAL/TECHNICAL FRAME:</h4>
					<p>
						The verification system cross-references applicant data against sovereign and commercial
						registries. A <code>VERIFIED_ORG</code> status must be written to the user's quantum-sealed
						profile before any invitation token can be generated. An unverified profile cannot
						receive the token.
					</p>
				</div>
			</div>
		</article>

		<article class="bylaw">
			<div class="bylaw-header">
				<span class="bylaw-id">B1</span>
				<h2>SOVEREIGN STANDING COVENANT</h2>
			</div>
			<div class="bylaw-body">
				<div class="frame social">
					<h4>SOCIAL/LEGAL FRAME:</h4>
					<p>
						Eligibility for Sovereign Review requires a proven, sustained record of operational
						proficiency within the Institutional Layer, minimally at Level 75.
					</p>
				</div>
				<div class="frame technical">
					<h4>ARCHITECTURAL/TECHNICAL FRAME:</h4>
					<p>
						The council review interface is inaccessible. The API endpoint <code>POST /sovereign-review</code>
						returns <code>403 FORBIDDEN</code> if the requesting user's <code>sustained_proficiency_level</code>
						attribute is below 75. The architecture enforces the social rule.
					</p>
				</div>
			</div>
		</article>

		<article class="bylaw">
			<div class="bylaw-header">
				<span class="bylaw-id">B2</span>
				<h2>SOVEREIGN REVIEW COVENANT</h2>
			</div>
			<div class="bylaw-body">
				<div class="frame social">
					<h4>SOCIAL/LEGAL FRAME:</h4>
					<p>
						The Sovereign Review is a multi-factor assessment of knowledge, intent, safety,
						and strategic alignment conducted by the Architect's Council.
					</p>
				</div>
				<div class="frame technical">
					<h4>ARCHITECTURAL/TECHNICAL FRAME:</h4>
					<p>
						The review is not a meeting. It is a state change protocol. A user's status can only
						transition from <code>APPLICANT</code> to <code>SOVEREIGN_REVIEWED</code> after their
						profile has been signed by a quorum of <code>COUNCIL</code> keys and their intent has
						been analyzed by the Level 1000 Oracle. The social review triggers the technical state change.
					</p>
				</div>
			</div>
		</article>

		<article class="bylaw">
			<div class="bylaw-header">
				<span class="bylaw-id">B3</span>
				<h2>FINAL ACCESS COVENANT</h2>
			</div>
			<div class="bylaw-body">
				<div class="frame social">
					<h4>SOCIAL/LEGAL FRAME:</h4>
					<p>
						Approved access is formalized through a custom treaty, defining scope and terms.
					</p>
				</div>
				<div class="frame technical">
					<h4>ARCHITECTURAL/TECHNICAL FRAME:</h4>
					<p>
						The treaty is not a document. It is a smart contract. Its execution on the sovereign
						ledger is the only event that can mint the cryptographic <code>SOVEREIGN_ACCESS_KEY</code>.
						This key is the sole validator for API endpoints at Levels 100+. No key, no access.
						The document ratifies the technical reality.
					</p>
				</div>
			</div>
		</article>
	</section>

	<section class="enforcement">
		<div class="enforcement-box">
			<h3>THE DUEL-LAW ENFORCEMENT PRINCIPLE</h3>
			<p>Denial of any knowledge requires arguing against two separate, self-reinforcing systems:</p>
			<ul>
				<li>
					<strong>Deny the Social/Legal By-Law?</strong>
					You deny the stated, agreed-upon covenant of the network.
				</li>
				<li>
					<strong>Deny the Architectural/Technical By-Law?</strong>
					You deny the mathematical and computational reality of the running system.
				</li>
			</ul>
			<p class="conclusion">
				To claim the requirement doesn't exist, one must claim both the covenant is false AND
				the code is lying. This is the "no way off" logical trap. The truth is stated twice,
				in two languages, creating a circular proof.
			</p>
		</div>
	</section>

	<section class="navigation">
		<a href="{base}/tiers" class="nav-link primary">
			<span>VIEW ARCHITECT TIERS</span>
			<span class="arrow">&#x2192;</span>
		</a>
		<a href="{base}/rules" class="nav-link">
			<span>RETURN TO RULES</span>
		</a>
	</section>
</div>

<style>
	.bylaws-page {
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

	.preamble {
		margin-bottom: var(--space-2xl);
	}

	.duel-explanation {
		background: var(--void-surface);
		border: 1px solid var(--void-edge);
		padding: var(--space-xl);
	}

	.duel-explanation h3 {
		text-align: center;
		margin-bottom: var(--space-lg);
	}

	.duel-explanation > p {
		text-align: center;
		margin-bottom: var(--space-lg);
	}

	.duel-explanation strong {
		color: var(--quantum-cyan);
	}

	.duel-forms {
		display: flex;
		align-items: stretch;
		gap: var(--space-md);
		margin-bottom: var(--space-lg);
	}

	.form {
		flex: 1;
		padding: var(--space-lg);
		background: var(--void-edge);
	}

	.form-label {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.625rem;
		color: var(--void-muted);
		letter-spacing: 0.15em;
		margin-bottom: var(--space-xs);
	}

	.form-name {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		margin-bottom: var(--space-sm);
	}

	.form.social .form-name { color: var(--quantum-cyan); }
	.form.technical .form-name { color: var(--quantum-gold); }

	.form p {
		font-size: 0.875rem;
		color: var(--void-muted);
		margin: 0;
	}

	.form-separator {
		display: flex;
		align-items: center;
		font-family: var(--font-mono);
		font-size: 1.5rem;
		color: var(--quantum-pink);
	}

	.conclusion {
		text-align: center;
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--quantum-pink);
		margin: 0;
	}

	.conclusion em {
		font-style: normal;
		color: var(--quantum-gold);
	}

	.bylaws-container {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
		margin-bottom: var(--space-2xl);
	}

	.bylaw {
		background: var(--void-surface);
		border: 1px solid var(--void-edge);
	}

	.bylaw-header {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-md) var(--space-lg);
		background: var(--void-edge);
		border-bottom: 1px solid var(--void-edge);
	}

	.bylaw-id {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--quantum-gold);
		background: var(--void-deep);
		padding: var(--space-xs) var(--space-sm);
	}

	.bylaw-header h2 {
		font-size: 0.875rem;
		margin: 0;
	}

	.bylaw-body {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		background: var(--void-edge);
	}

	.frame {
		padding: var(--space-lg);
		background: var(--void-surface);
	}

	.frame h4 {
		font-size: 0.625rem;
		letter-spacing: 0.15em;
		margin-bottom: var(--space-md);
	}

	.frame.social h4 { color: var(--quantum-cyan); }
	.frame.technical h4 { color: var(--quantum-gold); }

	.frame p {
		font-size: 0.875rem;
		line-height: 1.6;
		margin: 0;
	}

	.frame code {
		font-size: 0.75rem;
		color: var(--quantum-green);
	}

	.enforcement {
		margin-bottom: var(--space-2xl);
	}

	.enforcement-box {
		border: 2px solid var(--quantum-purple);
		background: rgba(139, 92, 246, 0.05);
		padding: var(--space-xl);
	}

	.enforcement-box h3 {
		text-align: center;
		color: var(--quantum-purple);
		margin-bottom: var(--space-lg);
	}

	.enforcement-box > p {
		text-align: center;
		margin-bottom: var(--space-lg);
	}

	.enforcement-box ul {
		list-style: none;
		margin-bottom: var(--space-lg);
	}

	.enforcement-box li {
		padding: var(--space-md);
		background: var(--void-surface);
		border: 1px solid var(--void-edge);
		margin-bottom: var(--space-sm);
	}

	.enforcement-box li strong {
		color: var(--quantum-pink);
	}

	.enforcement-box .conclusion {
		padding: var(--space-md);
		background: var(--void-surface);
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
		border-color: var(--quantum-purple);
	}

	.nav-link:hover {
		box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
	}

	@media (max-width: 768px) {
		.duel-forms {
			flex-direction: column;
		}

		.form-separator {
			justify-content: center;
		}

		.bylaw-body {
			grid-template-columns: 1fr;
		}
	}
</style>
