import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Hexagon } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Warning' },
  { path: '/access-rules', label: 'Access Protocol' },
  { path: '/by-laws', label: 'By-Laws' },
  { path: '/architect-tiers', label: 'Architect Tiers' },
  { path: '/demo', label: 'Level 50 Gate' },
  { path: '/contact', label: 'Contact' }
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <Hexagon className="logo-icon" />
          <div className="logo-text">
            <span className="logo-title">QSN</span>
            <span className="logo-subtitle">Quantum Security</span>
          </div>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <div className="navbar-links">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="navbar-actions">
            <Link to="/access-rules" className="btn btn-secondary">
              View Protocol
            </Link>
            <Link to="/demo" className="btn btn-primary">
              Level 50 Gate
            </Link>
          </div>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
