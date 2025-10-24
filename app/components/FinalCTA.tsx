'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden px-6 pb-24">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px', '0px 0px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main CTA Header */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-center"
          >
            Ready to{' '}
            <span className="gradient-text drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] text-shadow-lg">
              sync your business?
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto text-center"
          >
            Join 50+ suppliers who&apos;ve already automated their business and are growing faster than ever.
          </motion.p>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl md:text-2xl">⚡</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">7-Day Setup</h3>
              <p className="text-gray-400 text-xs md:text-sm">From WhatsApp to full ecommerce in one week</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl md:text-2xl">📈</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">156% Growth</h3>
              <p className="text-gray-400 text-xs md:text-sm">Average revenue increase in first 3 months</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl md:text-2xl">🛡️</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-400 text-xs md:text-sm">Dedicated support team for your success</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 justify-center items-center mb-8"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 hover:scale-105 transition-transform duration-200 w-full md:w-auto"
            >
              Automate My Business
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="btn-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 hover:scale-105 transition-transform duration-200 w-full md:w-auto"
            >
              See Demo
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xs md:text-sm text-gray-400 mb-4">Trusted by suppliers across India</p>
            <div className="flex justify-center items-center space-x-6 md:space-x-8 opacity-60">
              <div className="text-gray-500 font-semibold text-xs md:text-sm">IndiaMART</div>
              <div className="text-gray-500 font-semibold text-xs md:text-sm">TradeIndia</div>
              <div className="text-gray-500 font-semibold text-xs md:text-sm">ExportersIndia</div>
            </div>
          </motion.div>

          {/* Urgency Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 inline-block"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-lg px-4 md:px-6 py-2 md:py-3">
              <p className="text-cyan-300 font-medium text-xs md:text-sm">
                🚀 Limited spots available for Q1 2024 setup
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
