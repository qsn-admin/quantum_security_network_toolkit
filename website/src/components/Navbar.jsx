import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Hexagon } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/features', label: 'Features' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/demo', label: 'Demo' },
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
              link.path.startsWith('#') ? (
                <a
                  key={link.path}
                  href={link.path}
                  className={`nav-link ${link.highlight ? 'nav-link-highlight' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''} ${link.highlight ? 'nav-link-highlight' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
          <div className="navbar-actions">
            <a href="https://oroboroslab.github.io/quantum-security-network/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Launch App
            </a>
            <Link to="/demo" className="btn btn-primary">
              Try Demo
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
