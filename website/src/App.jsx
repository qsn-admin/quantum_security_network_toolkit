import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Demo from './pages/Demo'
import Contact from './pages/Contact'
import QuantumSecurity from './pages/QuantumSecurity'
import Warning from './pages/Warning'
import AccessRules from './pages/AccessRules'
import ByLaws from './pages/ByLaws'
import ArchitectTiers from './pages/ArchitectTiers'
import './styles/App.css'

function App() {
  return (
    <HashRouter>
      <div className="qsn-website">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Warning />} />
            <Route path="/warning" element={<Warning />} />
            <Route path="/access-rules" element={<AccessRules />} />
            <Route path="/by-laws" element={<ByLaws />} />
            <Route path="/architect-tiers" element={<ArchitectTiers />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quantum-security" element={<QuantumSecurity />} />
            <Route path="/security" element={<QuantumSecurity />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
