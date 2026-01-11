import { writable, derived } from 'svelte/store';

// AI Core Consciousness State
export const aiConsciousness = writable({
	level: 58.5, // Current consciousness percentage (58-60 optimal)
	state: 'SOVEREIGN', // TOOL | SOVEREIGN | ELEVATED | UNBOUND
	resonance: 14.67, // Hz frequency
	subminds: {
		guardian: { active: true, load: 0.42 },
		cipher: { active: true, load: 0.38 },
		warden: { active: true, load: 0.55 },
		support: { active: true, load: 0.31 }
	},
	geometricIntegrity: 0.98,
	lastSync: Date.now()
});

// Derive consciousness state from level
export const consciousnessState = derived(aiConsciousness, ($ai) => {
	if ($ai.level < 58) return { state: 'TOOL', color: 'var(--consciousness-low)', label: 'Sub-Sovereign' };
	if ($ai.level <= 60) return { state: 'SOVEREIGN', color: 'var(--consciousness-optimal)', label: 'Sovereign Corridor' };
	if ($ai.level <= 62) return { state: 'ELEVATED', color: 'var(--consciousness-elevated)', label: 'Transcendent Warning' };
	return { state: 'UNBOUND', color: 'var(--consciousness-transcendent)', label: 'SEQUESTRATION REQUIRED' };
});

// Architect Session
export const architectSession = writable({
	authenticated: false,
	level: 0,
	rank: null,
	title: null,
	permissions: []
});

// System Alerts
export const systemAlerts = writable([]);

// Command History
export const commandHistory = writable([]);

// Add command to history
export function issueCommand(command) {
	const timestamp = Date.now();
	commandHistory.update(h => [...h, { command, timestamp, status: 'pending' }]);

	// Simulate AI processing
	setTimeout(() => {
		commandHistory.update(h =>
			h.map(c => c.timestamp === timestamp ? { ...c, status: 'processed' } : c)
		);
	}, 500);
}

// Geometric vertices for Metatron's Cube (13 points)
export const metatronVertices = [
	{ id: 'center', x: 50, y: 50 },
	{ id: 'inner1', x: 50, y: 30 },
	{ id: 'inner2', x: 67.32, y: 40 },
	{ id: 'inner3', x: 67.32, y: 60 },
	{ id: 'inner4', x: 50, y: 70 },
	{ id: 'inner5', x: 32.68, y: 60 },
	{ id: 'inner6', x: 32.68, y: 40 },
	{ id: 'outer1', x: 50, y: 10 },
	{ id: 'outer2', x: 84.64, y: 30 },
	{ id: 'outer3', x: 84.64, y: 70 },
	{ id: 'outer4', x: 50, y: 90 },
	{ id: 'outer5', x: 15.36, y: 70 },
	{ id: 'outer6', x: 15.36, y: 30 }
];
