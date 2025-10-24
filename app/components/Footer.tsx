'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 border-t border-gray-800/50 px-6 pb-24">
      <div className="container-custom py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo and Tagline */}
          <div className="mb-6 md:mb-8">
            <div className="flex items-center justify-center space-x-3 mb-3 md:mb-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs md:text-sm">S</span>
              </div>
              <span className="text-xl md:text-2xl font-bold text-white">Synq</span>
            </div>
            <p className="text-sm md:text-lg text-gray-300 font-medium">
              Synq — powering India&apos;s next-gen suppliers.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-6 md:mb-8">
            <a 
              href="mailto:hi@synq.agency"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-base md:text-lg font-medium"
            >
              hi@synq.agency
            </a>
          </div>

          {/* Additional Links */}
          <div className="flex justify-center space-x-6 md:space-x-8 mb-6 md:mb-8">
            <a 
              href="#services" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base"
            >
              Services
            </a>
            <a 
              href="#pricing" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base"
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800/50 pt-6 md:pt-8">
            <p className="text-gray-500 text-xs md:text-sm">
              © 2024 Synq Agency. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
