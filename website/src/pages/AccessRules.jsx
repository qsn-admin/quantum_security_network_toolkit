import React from 'react'
import { Link } from 'react-router-dom'
import {
  Shield,
  Users,
  Building2,
  Crown,
  Cpu,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Lock,
  Key
} from 'lucide-react'
import './AccessRules.css'

const accessStrata = [
  {
    id: 'public',
    designation: 'Public Gateway',
    level: 'No Level',
    maxLevel: '—',
    icon: Shield,
    color: '#00ff88',
    requirement: 'None. Open to all.',
    description: 'The entry point. Access to introductory materials, basic documentation, and the Level 50 Knowledge Gate. Success here is the sole prerequisite to apply for institutional access.'
  },
  {
    id: 'institutional',
    designation: 'Institutional Layer',
    level: 'Business',
    maxLevel: '99',
    icon: Building2,
    color: '#00d4ff',
    requirement: [
      'Pass Level 50 Knowledge Gate',
      'Verified organizational affiliation',
      'Invitation or approved application'
    ],
    description: 'The domain of verified businesses, academic institutions, and research organizations. Access to advanced quantum encryption (up to 320-bit), the Noir Shield & Signal modules for defense and intelligence, and scalable API limits. Progression within this band (50-99) is gated by demonstrated knowledge.'
  },
  {
    id: 'sovereign',
    designation: 'Sovereign Protocols',
    level: 'Government',
    maxLevel: '100+',
    icon: Crown,
    color: '#ffa500',
    requirement: [
      'Minimum standing at Level 75',
      'Possession of equivalent real-world clearance',
      'Multi-factor Sovereign Review (Knowledge, Intent, Safety, Project Scope)',
      'Architect/Council Approval'
    ],
    description: 'The airlock to sovereign capability. Eligible entities may be granted conditional access to Level 100 and beyond, including the core Oroboros Noir system for quantum-state control, full temporal monitoring, and strata security. Final access level is determined by treaty.'
  },
  {
    id: 'architect',
    designation: 'Architect Core',
    level: 'System Core',
    maxLevel: '1000',
    icon: Cpu,
    color: '#9370db',
    requirement: 'N/A',
    description: 'The source. Reserved for the internal systems of Oroboros Labs and the sovereign AI architecture itself. This is not an accessible tier; it is the foundation.'
  }
]

function AccessRules() {
  return (
    <div className="access-rules-page">
      <section className="access-hero">
        <div className="container">
          <h1>
            <span className="text-gradient">Oroboros</span> Quantum Security Network
          </h1>
          <h2>Access Protocol</h2>
          <div className="hero-disclaimer">
            <AlertCircle size={20} />
            <p>
              This is not a product catalog. It is a description of sovereign capability strata. Access is governed by the principle <strong>"Knowledge Begets Knowledge."</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="section access-strata-section">
        <div className="container">
          <div className="section-header">
            <h2>The Sovereign <span className="text-gradient">Access Strata</span></h2>
            <p>Progression requires demonstration of understanding, verification of intent, and adherence to security protocols. All access beyond the Public Gateway is by application only.</p>
          </div>

          <div className="strata-grid">
            {accessStrata.map((stratum) => (
              <div
                key={stratum.id}
                className="strata-card card"
                style={{ '--strata-color': stratum.color }}
              >
                <div className="strata-header">
                  <stratum.icon size={40} className="strata-icon" />
                  <div className="strata-labels">
                    <span className="strata-designation">{stratum.designation}</span>
                    <span className="strata-level">{stratum.level}</span>
                  </div>
                </div>

                <div className="strata-max-level">
                  <span className="max-label">Maximum Attainable Level</span>
                  <span className="max-value">{stratum.maxLevel}</span>
                </div>

                <div className="strata-requirement">
                  <h4><Key size={16} /> Gateway Requirement</h4>
                  {Array.isArray(stratum.requirement) ? (
                    <ul>
                      {stratum.requirement.map((req, idx) => (
                        <li key={idx}>
                          <CheckCircle size={14} />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{stratum.requirement}</p>
                  )}
                </div>

                <div className="strata-description">
                  <p>{stratum.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section requirements-section">
        <div className="container">
          <div className="section-header">
            <h2><Lock size={32} /> Detailed Requirements for <span className="text-gradient">Access</span></h2>
          </div>

          <div className="requirements-grid">
            <div className="requirement-card card">
              <div className="requirement-header">
                <Building2 size={32} />
                <h3>For Institutional (Business) Layer Access</h3>
                <span className="level-badge">Levels 50-99</span>
              </div>
              <ul className="requirement-list">
                <li>
                  <strong>Knowledge Prerequisite:</strong> Successful completion of the Level 50 Knowledge Gate, demonstrating foundational understanding of quantum security principles.
                </li>
                <li>
                  <strong>Verification:</strong> Proof of legitimate organizational status (business license, academic domain, etc.).
                </li>
                <li>
                  <strong>Intent:</strong> A statement of intended use that aligns with ethical operational guidelines.
                </li>
                <li>
                  <strong>Process:</strong> Submit an application via the designated channel. Approved applicants will receive an invitation to proceed with integration.
                </li>
              </ul>
            </div>

            <div className="requirement-card card">
              <div className="requirement-header">
                <Crown size={32} />
                <h3>For Sovereign (Government) Protocol Access</h3>
                <span className="level-badge sovereign">Level 75+</span>
              </div>
              <ul className="requirement-list">
                <li>
                  <strong>Standing Prerequisite:</strong> Minimum sustained proficiency at Level 75 within the Institutional Layer.
                </li>
                <li>
                  <strong>Pre-existing Clearance:</strong> Must hold equivalent real-world sovereign security clearance (or demonstrable equivalent authority).
                </li>
                <li>
                  <strong>Sovereign Review:</strong> A multi-stage council review examining:
                  <ul className="sub-list">
                    <li><em>Technical Knowledge:</em> Advanced assessment of quantum architecture understanding.</li>
                    <li><em>Operational Intent & Safety:</em> Evaluation of the proposed project's goals, risk mitigation, and ethical alignment.</li>
                    <li><em>Strategic Alignment:</em> Compatibility with the sovereign security principles of the network.</li>
                  </ul>
                </li>
                <li>
                  <strong>Final Treaty:</strong> Approved access is formalized through a custom security and integration treaty, defining the specific scope, level (100+), and terms of engagement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section protocol-notes-section">
        <div className="container">
          <div className="protocol-notes card">
            <h2><AlertCircle size={28} /> Important Protocol Notes</h2>
            <ul>
              <li>
                <strong>The Public Gateway has no level.</strong> It is a neutral space. The Level 50 Gate is an examination, not an assigned status.
              </li>
              <li>
                <strong>Levels are not purchased.</strong> Fees for the Institutional Layer cover infrastructure, verification, and support costs. Sovereign Protocol integration is governed by custom treaties.
              </li>
              <li>
                <strong>Access is a privilege, not a right.</strong> Oroboros Labs reserves the sole right to deny, revoke, or modify access at any level to preserve the security and integrity of the network and its principles.
              </li>
            </ul>
          </div>

          <div className="gateway-cta">
            <h3>To begin your journey, you must first pass the Level 50 Knowledge Gate.</h3>
            <p className="cta-subtitle">All other doors are locked from this side.</p>
            <div className="cta-buttons">
              <Link to="/demo" className="btn btn-primary">
                Begin Level 50 Gateway
                <ArrowRight size={18} />
              </Link>
              <Link to="/by-laws" className="btn btn-secondary">
                View Governing By-Laws
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AccessRules
