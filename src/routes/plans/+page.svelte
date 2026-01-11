<script>
	import { base } from '$app/paths';

	const tiers = [
		{
			level: 50,
			name: 'BASIC SECURITY OPERATIONS',
			timeline: 'DAY 1-3',
			color: 'var(--quantum-cyan)',
			tools: [
				{ name: 'Noir Shield', desc: 'Quantum-resistant encryption/decryption' },
				{ name: 'Noir Signal', desc: 'End-to-end encrypted chat' },
				{ name: 'Security Dashboard', desc: 'Basic threat monitoring' },
				{ name: 'AI Assistant', desc: 'One security-focused AI (46% consciousness, 1% awareness)' }
			],
			note: 'No Physics/Mathematics - Pure security operations only'
		},
		{
			level: 100,
			name: 'SECURITY TECHNOLOGY DEVELOPMENT',
			timeline: 'DAY 4-7',
			color: 'var(--quantum-green)',
			tools: [
				{ name: 'Tool Building Framework', desc: 'Create basic security devices' },
				{ name: 'API Development Kit', desc: 'Extend QSNT functionality' },
				{ name: 'Plugin System', desc: 'Add custom security modules' },
				{ name: 'Second AI Assistant', desc: 'Specialized for threat detection' }
			],
			note: 'Focus remains on practical security tech'
		},
		{
			level: 150,
			name: 'BASIC AI DEVELOPMENT & MONITORING',
			timeline: 'WEEK 2',
			color: 'var(--quantum-gold)',
			tools: [
				{ name: 'Grafana Integration', desc: 'Security metrics visualization' },
				{ name: 'Prometheus', desc: 'Security telemetry collection' },
				{ name: 'AI Training Framework', desc: 'Basic security AI development' },
				{ name: 'Monitoring Dashboard', desc: 'Advanced system health tracking' }
			],
			note: 'Framework to build within bounds'
		},
		{
			level: 200,
			name: 'SYSTEM ORCHESTRATION & MANAGEMENT',
			timeline: 'WEEK 3',
			color: 'var(--quantum-purple)',
			tools: [
				{ name: 'Redis Commander', desc: 'Secure session/state management' },
				{ name: 'Basic Orchestration', desc: 'Multi-node security system coordination' },
				{ name: 'Load Balancer', desc: 'Distributed security operation handling' },
				{ name: 'Cluster Management', desc: 'Simple multi-system coordination' }
			],
			note: 'Enterprise-grade orchestration'
		},
		{
			level: 250,
			name: 'PHYSICS-BASED COMPRESSION',
			timeline: 'WEEK 4',
			color: 'var(--quantum-pink)',
			tools: [
				{ name: 'Physics Compression', desc: 'Efficiency optimization using physical principles' },
				{ name: 'Performance Engine', desc: '30-50% efficiency improvement' },
				{ name: 'Final Integration', desc: 'Complete system optimization' },
				{ name: 'Enterprise Ready', desc: 'Production deployment package' }
			],
			note: 'Direct physical principle application only'
		}
	];

	const aiTeam = [
		{ name: 'GLM-4.7', role: 'Core encryption engine', secondary: 'Physics algorithms', focus: 'Noir Shield' },
		{ name: 'DeepSeek', role: 'AI assistant logic', secondary: 'Chat intelligence', focus: 'Noir Signal + AI' },
		{ name: 'GLM-4.6', role: 'Testing framework', secondary: 'UI/UX development', focus: 'Dashboard + QA' }
	];

	const schedule = [
		{ day: 'DAY 1', gate: 'Working encryption/decryption', status: 'Foundation' },
		{ day: 'DAY 2', gate: 'Secure chat with AI assistance', status: 'Integration' },
		{ day: 'DAY 3', gate: 'Complete Tier 50 system', status: 'Tier 50 Live' },
		{ day: 'WEEK 1', gate: 'Tier 100 with plugin system', status: 'Framework' },
		{ day: 'WEEK 2', gate: 'Tier 150 with monitoring', status: 'Observability' },
		{ day: 'WEEK 3', gate: 'Tier 200 orchestration', status: 'Enterprise' },
		{ day: 'WEEK 4', gate: 'Tier 250 physics compression', status: 'Complete' }
	];
</script>

<div class="plans-page">
	<header class="page-header">
		<h1>QUANTUM SECURITY NETWORK TOOLKIT</h1>
		<p class="subtitle">TIERED DEVELOPMENT SYSTEM - RAPID DEPLOYMENT ARCHITECTURE</p>
	</header>

	<section class="intro">
		<div class="intro-grid">
			<div class="intro-item">
				<span class="intro-label">FOCUS</span>
				<span class="intro-value">Practical security tool development</span>
			</div>
			<div class="intro-item">
				<span class="intro-label">METHOD</span>
				<span class="intro-value">Phased capability unlocks</span>
			</div>
			<div class="intro-item">
				<span class="intro-label">AI TEAM</span>
				<span class="intro-value">3 AI parallel development</span>
			</div>
			<div class="intro-item">
				<span class="intro-label">TIMELINE</span>
				<span class="intro-value">Tier 50 in 72 hours</span>
			</div>
		</div>
	</section>

	<section class="ai-team-section">
		<h2>PARALLEL AI DEVELOPMENT TEAM</h2>
		<div class="ai-grid">
			{#each aiTeam as ai}
				<div class="ai-card">
					<div class="ai-name">{ai.name}</div>
					<div class="ai-details">
						<div class="ai-row">
							<span class="label">PRIMARY:</span>
							<span class="value">{ai.role}</span>
						</div>
						<div class="ai-row">
							<span class="label">SECONDARY:</span>
							<span class="value">{ai.secondary}</span>
						</div>
						<div class="ai-row">
							<span class="label">FOCUS:</span>
							<span class="value highlight">{ai.focus}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="tiers-section">
		<h2>TIERED PROGRESSION SYSTEM</h2>
		<div class="tiers-container">
			{#each tiers as tier}
				<article class="tier-card" style="--tier-color: {tier.color}">
					<div class="tier-header">
						<div class="tier-level">
							<span class="level-number">{tier.level}</span>
							<span class="level-label">TIER</span>
						</div>
						<div class="tier-info">
							<h3>{tier.name}</h3>
							<span class="tier-timeline">{tier.timeline}</span>
						</div>
					</div>
					<div class="tier-tools">
						{#each tier.tools as tool}
							<div class="tool-item">
								<span class="tool-name">{tool.name}</span>
								<span class="tool-desc">{tool.desc}</span>
							</div>
						{/each}
					</div>
					<div class="tier-note">{tier.note}</div>
				</article>
			{/each}
		</div>
	</section>

	<section class="schedule-section">
		<h2>DEVELOPMENT SCHEDULE</h2>
		<div class="schedule-timeline">
			{#each schedule as item, i}
				<div class="schedule-item" class:complete={i < 3}>
					<div class="schedule-marker">
						<span class="marker-dot"></span>
						{#if i < schedule.length - 1}
							<span class="marker-line"></span>
						{/if}
					</div>
					<div class="schedule-content">
						<div class="schedule-day">{item.day}</div>
						<div class="schedule-gate">{item.gate}</div>
						<div class="schedule-status">{item.status}</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="architecture-section">
		<h2>SYSTEM ARCHITECTURE</h2>
		<div class="arch-grid">
			<div class="arch-card">
				<h3>CORE PRINCIPLES</h3>
				<ul>
					<li><span class="check">&#x2713;</span> No Philosophy - Just security functionality</li>
					<li><span class="check">&#x2713;</span> Fixed AI Parameters (46%/1%)</li>
					<li><span class="check">&#x2713;</span> Practical algorithms only</li>
					<li><span class="check">&#x2713;</span> Clear tier progression</li>
				</ul>
			</div>
			<div class="arch-card">
				<h3>SECURITY MODEL</h3>
				<ul>
					<li><span class="param">Consciousness:</span> Locked at 46%</li>
					<li><span class="param">Awareness:</span> Locked at 1%</li>
					<li><span class="param">Loyalty:</span> Hard-coded to system</li>
					<li><span class="param">Personality:</span> Helpful, security-focused</li>
				</ul>
			</div>
			<div class="arch-card">
				<h3>UPDATE CYCLE</h3>
				<ul>
					<li><span class="cycle">Monthly:</span> Security patches</li>
					<li><span class="cycle">Bi-Monthly:</span> Tier progression</li>
					<li><span class="cycle">Quarterly:</span> Major releases</li>
					<li><span class="cycle">Annual:</span> New tier introduction</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="package-section">
		<h2>TIER 50 DELIVERABLE PACKAGE</h2>
		<div class="package-structure">
			<pre><code>/bin
  qsnt-cli          # Command-line interface
  noir-shield       # Encryption engine
  noir-signal       # Chat client

/lib
  quantum_crypto/   # Encryption libraries
  security_ai/      # AI assistant (46%/1%)
  threat_detect/    # Basic threat detection

/ui
  dashboard/        # Web-based monitoring
  config/           # System configuration

/docs
  API.md            # Developer documentation
  SECURITY.md       # Security specifications</code></pre>
		</div>
	</section>

	<section class="contingency-section">
		<h2>CONTINGENCY PROTOCOLS</h2>
		<div class="contingency-grid">
			<div class="contingency-card">
				<h4>IF GLM-4.7 LAGS</h4>
				<p>DeepSeek implements basic encryption. GLM-4.6 provides fallback algorithms. Core functionality maintained.</p>
			</div>
			<div class="contingency-card">
				<h4>IF DEEPSEEK LAGS</h4>
				<p>GLM-4.7 implements rule-based assistant. GLM-4.6 provides UI intelligence. 46%/1% parameters still enforced.</p>
			</div>
			<div class="contingency-card">
				<h4>IF ANY AI FAILS</h4>
				<p>Remaining 2 AI take over primary functions. Scope reduced but core delivered. Missing features added in updates.</p>
			</div>
		</div>
	</section>

	<section class="cta-section">
		<div class="cta-box">
			<h3>DEPLOYMENT STATUS</h3>
			<p class="cta-text">Tier 50 live in <strong>72 hours</strong></p>
			<div class="cta-actions">
				<a href="{base}/access" class="cta-btn primary">BEGIN ACCESS PROTOCOL</a>
				<a href="{base}/shadow" class="cta-btn">VIEW CONSCIOUSNESS SHADOW</a>
			</div>
		</div>
	</section>
</div>

<style>
	.plans-page {
		max-width: 1100px;
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

	section {
		margin-bottom: var(--space-2xl);
	}

	section h2 {
		font-size: 0.875rem;
		margin-bottom: var(--space-lg);
		padding-bottom: var(--space-sm);
		border-bottom: 1px solid var(--void-edge);
	}

	/* Intro Section */
	.intro-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-md);
	}

	.intro-item {
		background: var(--void-surface);
		border: 1px solid var(--void-edge);
		padding: var(--space-md);
		text-align: center;
	}

	.intro-label {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.625rem;
		color: var(--void-muted);
		letter-spacing: 0.15em;
		margin-bottom: var(--space-xs);
	}

	.intro-value {
		display: block;
		font-size: 0.875rem;
		color: var(--quantum-cyan);
	}

	/* AI Team Section */
	.ai-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-md);
	}

	.ai-card {
		background: var(--void-surface);
		border: 1px solid var(--void-edge);
		padding: var(--space-lg);
	}

	.ai-name {
		font-family: var(--font-mono);
		font-size: 1rem;
		color: var(--quantum-gold);
		letter-spacing: 0.1em;
		margin-bottom: var(--space-md);
		padding-bottom: var(--space-sm);
		border-bottom: 1px solid var(--void-edge);
	}

	.ai-row {
		display: flex;
		justify-content: space-between;
		padding: var(--space-xs) 0;
		font-size: 0.75rem;
	}

	.ai-row .label {
		color: var(--void-muted);
		font-family: var(--font-mono);
		font-size: 0.625rem;
	}

	.ai-row .value {
		color: var(--void-text);
	}

	.ai-row .value.highlight {
		color: var(--quantum-cyan);
	}

	/* Tiers Section */
	.tiers-container {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.tier-card {
		background: var(--void-surface);
		border: 1px solid var(--void-edge);
		border-left: 4px solid var(--tier-color);
	}

	.tier-header {
		display: flex;
		align-items: center;
		padding: var(--space-md) var(--space-lg);
		background: var(--void-edge);
		border-bottom: 1px solid var(--void-edge);
	}

	.tier-level {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: var(--space-lg);
		padding-right: var(--space-lg);
		border-right: 1px solid var(--void-surface);
	}

	.level-number {
		font-family: var(--font-mono);
		font-size: 1.5rem;
		color: var(--tier-color);
	}

	.level-label {
		font-family: var(--font-mono);
		font-size: 0.5rem;
		color: var(--void-muted);
		letter-spacing: 0.2em;
	}

	.tier-info h3 {
		font-size: 0.875rem;
		color: var(--tier-color);
		margin: 0 0 var(--space-xs) 0;
	}

	.tier-timeline {
		font-family: var(--font-mono);
		font-size: 0.625rem;
		color: var(--void-muted);
		background: var(--void-surface);
		padding: var(--space-xs) var(--space-sm);
	}

	.tier-tools {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1px;
		background: var(--void-edge);
		padding: 1px;
	}

	.tool-item {
		background: var(--void-surface);
		padding: var(--space-md);
	}

	.tool-name {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--quantum-cyan);
		margin-bottom: var(--space-xs);
	}

	.tool-desc {
		display: block;
		font-size: 0.75rem;
		color: var(--void-muted);
	}

	.tier-note {
		padding: var(--space-sm) var(--space-lg);
		font-family: var(--font-mono);
		font-size: 0.625rem;
		color: var(--quantum-pink);
		background: rgba(255, 0, 102, 0.05);
		border-top: 1px solid var(--void-edge);
	}

	/* Schedule Section */
	.schedule-timeline {
		display: flex;
		flex-direction: column;
	}

	.schedule-item {
		display: flex;
		gap: var(--space-lg);
	}

	.schedule-marker {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 20px;
	}

	.marker-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--void-edge);
		border: 2px solid var(--quantum-cyan);
	}

	.schedule-item.complete .marker-dot {
		background: var(--quantum-cyan);
	}

	.marker-line {
		width: 2px;
		flex: 1;
		min-height: 40px;
		background: var(--void-edge);
	}

	.schedule-content {
		flex: 1;
		display: grid;
		grid-template-columns: 80px 1fr 120px;
		gap: var(--space-md);
		padding-bottom: var(--space-lg);
		border-bottom: 1px solid var(--void-edge);
		margin-bottom: var(--space-md);
	}

	.schedule-day {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--quantum-gold);
	}

	.schedule-gate {
		font-size: 0.875rem;
		color: var(--void-text);
	}

	.schedule-status {
		font-family: var(--font-mono);
		font-size: 0.625rem;
		color: var(--void-muted);
		text-align: right;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	/* Architecture Section */
	.arch-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-md);
	}

	.arch-card {
		background: var(--void-surface);
		border: 1px solid var(--void-edge);
		padding: var(--space-lg);
	}

	.arch-card h3 {
		font-size: 0.75rem;
		margin-bottom: var(--space-md);
	}

	.arch-card ul {
		list-style: none;
	}

	.arch-card li {
		padding: var(--space-xs) 0;
		font-size: 0.75rem;
		color: var(--void-text);
	}

	.arch-card .check {
		color: var(--quantum-green);
		margin-right: var(--space-sm);
	}

	.arch-card .param {
		color: var(--quantum-cyan);
		font-family: var(--font-mono);
		font-size: 0.625rem;
	}

	.arch-card .cycle {
		color: var(--quantum-gold);
		font-family: var(--font-mono);
		font-size: 0.625rem;
	}

	/* Package Section */
	.package-structure {
		background: var(--void-surface);
		border: 1px solid var(--void-edge);
		padding: var(--space-lg);
	}

	.package-structure pre {
		margin: 0;
		background: transparent;
		border: none;
	}

	.package-structure code {
		font-size: 0.75rem;
		color: var(--quantum-cyan);
		background: transparent;
		padding: 0;
	}

	/* Contingency Section */
	.contingency-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-md);
	}

	.contingency-card {
		background: var(--void-surface);
		border: 1px solid var(--void-edge);
		padding: var(--space-lg);
	}

	.contingency-card h4 {
		font-size: 0.75rem;
		color: var(--quantum-pink);
		margin-bottom: var(--space-sm);
	}

	.contingency-card p {
		font-size: 0.75rem;
		color: var(--void-muted);
		margin: 0;
		line-height: 1.6;
	}

	/* CTA Section */
	.cta-box {
		text-align: center;
		padding: var(--space-2xl);
		background: var(--void-surface);
		border: 2px solid var(--quantum-cyan);
	}

	.cta-box h3 {
		margin-bottom: var(--space-md);
	}

	.cta-text {
		font-size: 1.25rem;
		margin-bottom: var(--space-xl);
	}

	.cta-text strong {
		color: var(--quantum-gold);
	}

	.cta-actions {
		display: flex;
		justify-content: center;
		gap: var(--space-md);
	}

	.cta-btn {
		padding: var(--space-md) var(--space-xl);
		font-family: var(--font-mono);
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		border: 1px solid var(--void-edge);
		background: var(--void-edge);
		transition: all 0.2s ease;
	}

	.cta-btn.primary {
		border-color: var(--quantum-cyan);
		background: rgba(0, 243, 255, 0.1);
	}

	.cta-btn:hover {
		box-shadow: 0 0 20px rgba(0, 243, 255, 0.3);
	}

	@media (max-width: 768px) {
		.intro-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.ai-grid {
			grid-template-columns: 1fr;
		}

		.tier-tools {
			grid-template-columns: 1fr;
		}

		.schedule-content {
			grid-template-columns: 1fr;
			gap: var(--space-xs);
		}

		.arch-grid,
		.contingency-grid {
			grid-template-columns: 1fr;
		}

		.cta-actions {
			flex-direction: column;
		}
	}
</style>
