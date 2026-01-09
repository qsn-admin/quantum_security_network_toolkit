import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Warning from './pages/Warning'
import AccessRules from './pages/AccessRules'
import ByLaws from './pages/ByLaws'
import ArchitectTiers from './pages/ArchitectTiers'
import Demo from './pages/Demo'
import Contact from './pages/Contact'
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
            <Route path="/demo" element={<Demo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
