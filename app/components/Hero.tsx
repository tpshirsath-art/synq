'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-24 pb-16 md:pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden px-6">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-30">
        {/* Moving Grid Pattern */}
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
        
        {/* Sync Dots Animation */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
            }}
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
        
        {/* Connection Lines Animation */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M10,20 Q30,10 50,20 T90,20"
              stroke="rgba(6, 182, 212, 0.4)"
              strokeWidth="0.5"
              fill="none"
              animate={{
                pathLength: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0
              }}
            />
            <motion.path
              d="M10,40 Q30,30 50,40 T90,40"
              stroke="rgba(20, 184, 166, 0.4)"
              strokeWidth="0.5"
              fill="none"
              animate={{
                pathLength: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.path
              d="M10,60 Q30,50 50,60 T90,60"
              stroke="rgba(6, 182, 212, 0.4)"
              strokeWidth="0.5"
              fill="none"
              animate={{
                pathLength: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.path
              d="M10,80 Q30,70 50,80 T90,80"
              stroke="rgba(20, 184, 166, 0.4)"
              strokeWidth="0.5"
              fill="none"
              animate={{
                pathLength: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </svg>
        </motion.div>

        {/* Floating Connection Dots */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-300 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 bg-teal-300 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Strip - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 hidden md:block"
          >
            <p className="text-sm text-gray-400 mb-4">Empowering the next generation of suppliers to automate their business</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-gray-500 font-semibold">IndiaMART</div>
              <div className="text-gray-500 font-semibold">TradeIndia</div>
              <div className="text-gray-500 font-semibold">ExportersIndia</div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <div className="relative">
            {/* Cyan Glow Background */}
            <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full"></div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-6 leading-relaxed text-center py-4 md:py-6 mobile-fade-up"
            >
              <span className="block sm:hidden">Sync your business. <span className="gradient-text drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] text-shadow-lg">Automate everything.</span></span>
              <span className="hidden sm:block">We sync your offline business online — and <span className="gradient-text drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] text-shadow-lg">completely automate</span> it</span>
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm md:text-2xl text-gray-300 mb-8 md:mb-8 leading-relaxed max-w-xs md:max-w-3xl mx-auto text-center"
          >
            If you&apos;re still taking orders on WhatsApp, you&apos;re losing customers
          </motion.p>

          {/* Additional Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm md:text-xl text-gray-400 mb-8 md:mb-8 leading-relaxed max-w-xs md:max-w-3xl mx-auto text-center"
          >
            Most suppliers lose repeat business because orders live in chat threads. Synq gives your buyers an app — <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="text-cyan-300 font-medium"
            >
              one tap, one order
            </motion.span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-4 justify-center items-center mb-12 md:mb-12 mobile-fade-up"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full md:w-auto"
            >
              Join the waitlist
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="btn-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full md:w-auto"
            >
              Learn more
            </button>
          </motion.div>

          {/* Mobile Tagline - Only visible on mobile, positioned after CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="md:hidden mb-6"
          >
            <p className="text-xs text-gray-400 mb-3 max-w-xs mx-auto text-center">Empowering the next generation of suppliers to automate their business</p>
            <div className="flex justify-center items-center space-x-4 opacity-60">
              <div className="text-gray-500 font-semibold text-xs">IndiaMART</div>
              <div className="text-gray-500 font-semibold text-xs">TradeIndia</div>
              <div className="text-gray-500 font-semibold text-xs">ExportersIndia</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col items-center text-gray-400 text-sm mb-16 md:mb-20"
          >
            <span>Learn more</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mt-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Dashboard Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center max-w-3xl mx-auto mt-20 md:mt-32 mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              <span className="gradient-text">Automation that works while you sleep</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              Your dashboard updates in real-time, orders process automatically, and customers get instant responses — all without you lifting a finger.
            </p>
          </motion.div>

          {/* Modern Ecommerce Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative max-w-7xl mx-auto px-4 md:px-0"
          >
            <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl shadow-cyan-900/20 overflow-hidden float-slow">
              {/* Dashboard Header */}
              <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 md:py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg md:text-2xl font-bold text-gray-900">Ecommerce Dashboard</h2>
                    <p className="text-sm md:text-base text-gray-600">Here&apos;s what&apos;s going on at your business right now</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative hidden md:block">
                      <input 
                        type="text" 
                        placeholder="Search" 
                        className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-sm">🔔</span>
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-sm">⚙️</span>
                      </div>
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">U</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 md:p-6">
                {/* Top Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="bg-white border border-gray-200 rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm gradient-shine"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs md:text-sm text-gray-600 mb-1">57 new orders</p>
                        <p className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block">Processing</p>
                      </div>
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center icon-float">
                        <span className="text-green-600 text-lg md:text-xl">🛒</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="bg-white border border-gray-200 rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm gradient-shine gradient-shine-delay-1"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs md:text-sm text-gray-600 mb-1">5 orders</p>
                        <p className="text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full inline-block">On hold</p>
                      </div>
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center icon-float" style={{ animationDelay: '0.5s' }}>
                        <span className="text-yellow-600 text-lg md:text-xl">📦</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="bg-white border border-gray-200 rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm gradient-shine gradient-shine-delay-2"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs md:text-sm text-gray-600 mb-1">15 products</p>
                        <p className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full inline-block">Out of stock</p>
                      </div>
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-lg flex items-center justify-center icon-float" style={{ animationDelay: '1s' }}>
                        <span className="text-red-600 text-lg md:text-xl">🏷️</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                  {/* Total Sells Chart */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="lg:col-span-2 bg-white border border-gray-200 rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm gradient-shine gradient-shine-delay-3"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900">Total sells</h3>
                      <span className="text-xs md:text-sm text-gray-500">Payment received across all channels</span>
                    </div>
                    <div className="h-32 md:h-48 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="text-center">
                        <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">₹2,48,847</div>
                        <div className="text-xs md:text-sm text-gray-600">Total sells this month</div>
                      </div>
                      
                      {/* Floating Growth Label */}
                      <motion.div
                        animate={{ 
                          y: [-3, 3, -3],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-2 right-2 md:top-4 md:right-4 bg-green-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg"
                      >
                        💰 +48% this month
                      </motion.div>
                      <motion.div
                        animate={{ 
                          scale: [1, 1.05, 1],
                          opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10"
                      />
                    </div>
                  </motion.div>

                  {/* Total Orders */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="bg-white border border-gray-200 rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm gradient-shine gradient-shine-delay-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900">Total orders</h3>
                      <span className="text-xs md:text-sm text-orange-600 bg-orange-50 px-2 py-1 rounded-full">+4.8%</span>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">16,247</div>
                    <div className="h-24 md:h-32 bg-gradient-to-t from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xs md:text-sm text-gray-600 mb-1">Last 7 days</div>
                        <div className="flex space-x-2">
                          <div className="w-3 h-8 bg-blue-500 rounded-sm"></div>
                          <div className="w-3 h-12 bg-blue-500 rounded-sm"></div>
                          <div className="w-3 h-6 bg-blue-500 rounded-sm"></div>
                          <div className="w-3 h-10 bg-blue-500 rounded-sm"></div>
                          <div className="w-3 h-8 bg-blue-500 rounded-sm"></div>
                          <div className="w-3 h-14 bg-blue-500 rounded-sm"></div>
                          <div className="w-3 h-9 bg-blue-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-gray-500">
                      <div className="flex justify-between">
                        <span>Completed (54%)</span>
                        <span>Pending (46%)</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  {/* New Customers */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    className="bg-white border border-gray-200 rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm gradient-shine gradient-shine-delay-5"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900">New customers</h3>
                      <span className="text-xs md:text-sm text-orange-600 bg-orange-50 px-2 py-1 rounded-full">+3.56%</span>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">356</div>
                    <div className="h-20 md:h-24 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg flex items-center justify-center">
                      <div className="text-xs md:text-sm text-gray-600">Last 7 days trend</div>
                    </div>
                  </motion.div>

                  {/* Most Selling Product */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="bg-white border border-gray-200 rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm gradient-shine gradient-shine-delay-6"
                  >
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Most selling product</h3>
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                        <span className="text-xl md:text-2xl">📦</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Industrial Pipes</h4>
                      <p className="text-xs md:text-sm text-gray-600 mb-3">Steel & PVC variants</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-gray-600">Units sold</span>
                        </div>
                        <span className="font-semibold text-sm md:text-base">1,247</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-2">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                          <span className="text-gray-600">Revenue</span>
                        </div>
                        <span className="font-semibold text-sm md:text-base">₹2.1L</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-2">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                          <span className="text-gray-600">Growth</span>
                        </div>
                        <span className="font-semibold text-green-600 text-sm md:text-base">+23%</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Success Elements */}
            <motion.div
              animate={{ 
                y: [-5, 5, -5],
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 20px rgba(34, 197, 94, 0.3)',
                  '0 0 40px rgba(34, 197, 94, 0.6)',
                  '0 0 20px rgba(34, 197, 94, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-green-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg"
            >
              📈 +156% Growth — since Synq automation
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [5, -5, 5],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-cyan-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg mt-3 md:mt-0"
            >
              🚀 Auto-Sync Active
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
