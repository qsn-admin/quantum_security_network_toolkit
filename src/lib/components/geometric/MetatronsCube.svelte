<script>
	import { metatronVertices } from '$lib/stores/consciousness.js';
	import { onMount } from 'svelte';

	let mounted = false;
	let rotation = 0;

	// All connections in Metatron's Cube
	const connections = [
		// Inner hexagon
		['inner1', 'inner2'], ['inner2', 'inner3'], ['inner3', 'inner4'],
		['inner4', 'inner5'], ['inner5', 'inner6'], ['inner6', 'inner1'],
		// Outer hexagon
		['outer1', 'outer2'], ['outer2', 'outer3'], ['outer3', 'outer4'],
		['outer4', 'outer5'], ['outer5', 'outer6'], ['outer6', 'outer1'],
		// Inner to outer connections
		['inner1', 'outer1'], ['inner2', 'outer2'], ['inner3', 'outer3'],
		['inner4', 'outer4'], ['inner5', 'outer5'], ['inner6', 'outer6'],
		// Center to inner
		['center', 'inner1'], ['center', 'inner2'], ['center', 'inner3'],
		['center', 'inner4'], ['center', 'inner5'], ['center', 'inner6'],
		// Cross connections (inner to outer offset)
		['inner1', 'outer2'], ['inner1', 'outer6'],
		['inner2', 'outer1'], ['inner2', 'outer3'],
		['inner3', 'outer2'], ['inner3', 'outer4'],
		['inner4', 'outer3'], ['inner4', 'outer5'],
		['inner5', 'outer4'], ['inner5', 'outer6'],
		['inner6', 'outer5'], ['inner6', 'outer1']
	];

	function getVertex(id) {
		return metatronVertices.find(v => v.id === id);
	}

	onMount(() => {
		mounted = true;
		const interval = setInterval(() => {
			rotation = (rotation + 0.1) % 360;
		}, 50);
		return () => clearInterval(interval);
	});
</script>

<div class="metatrons-cube" style="transform: rotate({rotation}deg)">
	<svg viewBox="0 0 100 100" class="cube-svg">
		<!-- Connection lines -->
		{#each connections as [from, to], i}
			{@const v1 = getVertex(from)}
			{@const v2 = getVertex(to)}
			<line
				x1={v1.x}
				y1={v1.y}
				x2={v2.x}
				y2={v2.y}
				class="connection"
				style="animation-delay: {i * 0.05}s"
			/>
		{/each}

		<!-- Vertices -->
		{#each metatronVertices as vertex, i}
			<circle
				cx={vertex.x}
				cy={vertex.y}
				r={vertex.id === 'center' ? 3 : 2}
				class="vertex {vertex.id === 'center' ? 'center' : ''}"
				style="animation-delay: {i * 0.1}s"
			/>
		{/each}
	</svg>
</div>

<style>
	.metatrons-cube {
		width: 200px;
		height: 200px;
		transition: transform 0.1s linear;
	}

	.cube-svg {
		width: 100%;
		height: 100%;
	}

	.connection {
		stroke: var(--quantum-cyan);
		stroke-width: 0.3;
		opacity: 0.4;
		animation: lineGlow 3s ease-in-out infinite;
	}

	.vertex {
		fill: var(--quantum-cyan);
		animation: vertexPulse 2s ease-in-out infinite;
	}

	.vertex.center {
		fill: var(--quantum-gold);
		filter: drop-shadow(0 0 3px var(--quantum-gold));
	}

	@keyframes lineGlow {
		0%, 100% { opacity: 0.3; stroke-width: 0.3; }
		50% { opacity: 0.6; stroke-width: 0.4; }
	}

	@keyframes vertexPulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.6; }
	}
</style>
