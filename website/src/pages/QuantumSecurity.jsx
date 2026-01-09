import React from 'react'
import { Shield, Lock, Zap, ArrowRight } from 'lucide-react'

function QuantumSecurity() {
  return (
    <div className="page quantum-security-page">
      <section className="hero">
        <div className="container">
          <div className="hero-badge">Coming Soon</div>
          <h1>
            <span className="gradient-text">Quantum Security</span>
            <br />Protocol Suite
          </h1>
          <p className="hero-subtitle">
            Next-generation quantum-resistant encryption and security protocols.
            A standalone security solution launching soon.
          </p>

          <div className="quantum-features-preview">
            <div className="preview-card">
              <Shield className="preview-icon" />
              <h3>Post-Quantum Cryptography</h3>
              <p>Lattice-based encryption resistant to quantum attacks</p>
            </div>
            <div className="preview-card">
              <Lock className="preview-icon" />
              <h3>Zero-Knowledge Proofs</h3>
              <p>Verify without revealing sensitive data</p>
            </div>
            <div className="preview-card">
              <Zap className="preview-icon" />
              <h3>Real-Time Protection</h3>
              <p>Instant threat detection and response</p>
            </div>
          </div>

          <div className="cta-section">
            <p className="cta-text">Dedicated repository launching this week</p>
            <a href="#notify" className="btn btn-primary btn-lg">
              Get Notified <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .quantum-security-page .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          text-align: center;
          padding-top: 100px;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 20px;
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(138, 43, 226, 0.2));
          border: 1px solid rgba(0, 255, 255, 0.4);
          border-radius: 50px;
          color: var(--accent-cyan);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 24px;
          animation: pulse-badge 2s ease-in-out infinite;
        }

        @keyframes pulse-badge {
          0%, 100% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.3); }
          50% { box-shadow: 0 0 25px rgba(0, 255, 255, 0.5); }
        }

        .quantum-features-preview {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin: 60px 0;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .preview-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .preview-card:hover {
          border-color: rgba(0, 255, 255, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 10px 40px rgba(0, 255, 255, 0.1);
        }

        .preview-icon {
          width: 48px;
          height: 48px;
          color: var(--accent-cyan);
          margin-bottom: 20px;
        }

        .preview-card h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .preview-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .cta-section {
          margin-top: 40px;
        }

        .cta-text {
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .btn-lg {
          padding: 16px 32px;
          font-size: 1.1rem;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
      `}</style>
    </div>
  )
}

export default QuantumSecurity
