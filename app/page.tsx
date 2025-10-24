'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Services from './components/Services'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import AutoSyncBadge from './components/AutoSyncBadge'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <div className="section-transition">
          <ProblemSolution />
        </div>
        <div className="section-transition">
          <Services />
        </div>
        <div className="section-transition">
          <Pricing />
        </div>
        <div className="section-transition">
          <FinalCTA />
        </div>
        <div className="section-transition">
          <Contact />
        </div>
      </motion.div>
      
      <Footer />
      <AutoSyncBadge />
    </main>
  )
}
