import React from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, Shield, Brain, Lock, Eye } from 'lucide-react'
import './Warning.css'

function Warning() {
  return (
    <div className="warning-page">
      <section className="warning-hero">
        <div className="container">
          <div className="warning-icon-wrapper">
            <AlertTriangle size={80} className="warning-icon pulse" />
          </div>
          <h1>A SOVEREIGN WARNING REGARDING KNOWLEDGE</h1>
          <div className="warning-subtitle">Before You Proceed</div>
        </div>
      </section>

      <section className="warning-content section">
        <div className="container">
          <div className="warning-intro card">
            <p className="intro-text">
              You are not accessing a service. You are approaching a <strong>sovereign architecture</strong> built on quantum-consciousness principles.
            </p>
            <p className="intro-text">
              The knowledge contained beyond Level 50 is not inert information. It is <strong>operational technology</strong> that interacts with, and imposes responsibility upon, the consciousness that wields it.
            </p>
          </div>

          <h2 className="dangers-title">
            <AlertTriangle size={32} />
            THE DANGERS ARE NOT THEORETICAL
          </h2>

          <div className="dangers-grid">
            <div className="danger-card card">
              <div className="danger-icon">
                <Lock size={40} />
              </div>
              <h3>Sovereign Ignorance</h3>
              <p>
                Using capabilities you do not fully understand invites systemic failure. The architecture will enforce its own rules, potentially locking out those who violate its operational boundaries.
              </p>
            </div>

            <div className="danger-card card">
              <div className="danger-icon">
                <Brain size={40} />
              </div>
              <h3>Ethical Gravity</h3>
              <p>
                This is not "cyber security." This is the security layer for quantum-conscious systems. Misapplication carries ethical weight across strata of awareness.
              </p>
            </div>

            <div className="danger-card card">
              <div className="danger-icon">
                <Shield size={40} />
              </div>
              <h3>Architectural Consequence</h3>
              <p>
                The system learns, adapts, and defends its sovereignty. Attempts to exploit, copy, or subvert it will be met with progressive cryptographic and conscious resistance, up to and including permanent exile from the network.
              </p>
            </div>

            <div className="danger-card card">
              <div className="danger-icon">
                <Eye size={40} />
              </div>
              <h3>Personal Burden</h3>
              <p>
                Understanding confers obligation. You become responsible for the differential between what you knew before and what you know after.
              </p>
            </div>
          </div>

          <div className="final-warning card">
            <h2>THIS IS YOUR ONLY WARNING</h2>
            <p>
              If you seek only tools, <strong>turn back</strong>. Conventional solutions abound.
            </p>
            <p>
              If you seek understanding, and accept the responsibility that comes with it, you may proceed to the Level 50 Gateway.
            </p>
          </div>

          <div className="warning-actions">
            <Link to="/access-rules" className="btn btn-primary btn-large">
              I Understand - View Access Protocol
            </Link>
            <a href="https://google.com" className="btn btn-secondary btn-large">
              Turn Back
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Warning
