'use client'

import { motion, useInView } from 'framer-motion'
import { Settings, Bot, CreditCard, BarChart3 } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="text-3xl font-bold gradient-text mb-2">
      {count}{suffix}
    </span>
  )
}

export default function ProblemSolution() {
  const problems = [
    {
      icon: '📱',
      title: 'Manual WhatsApp Orders',
      description: 'Taking orders via WhatsApp is time-consuming and error-prone'
    },
    {
      icon: '⏰',
      title: 'Delayed Payments',
      description: 'Payment follow-ups and reconciliation take hours daily'
    },
    {
      icon: '📦',
      title: 'Missed SKUs',
      description: 'Inventory mismatches lead to lost sales and customer frustration'
    },
    {
      icon: '📊',
      title: 'No Analytics',
      description: 'No visibility into sales patterns, customer behavior, or growth opportunities'
    }
  ]

  const solutions = [
    {
      icon: Settings,
      title: 'Complete Ecommerce Suite',
      description: 'Website + buyer app + admin panel deployed in weeks'
    },
    {
      icon: Bot,
      title: 'WhatsApp Automation',
      description: 'Auto-respond to inquiries, send order confirmations, payment reminders'
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'UPI, net banking, payment gateways with automated invoicing'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Track orders, inventory, customer behavior, and growth metrics'
    }
  ]

  return (
    <section className="section-padding bg-gray-900/50 px-6 pb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-center">
            Stop losing money to{' '}
            <span className="gradient-text">manual processes</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-400 mb-4 text-center">
            See how Synq replaces everyday headaches with automation that works 24/7.
          </p>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Manual work costs time, money, and customers — we automate everything so you can grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-4">Current Pain Points</h3>
              <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8">What&apos;s eating your time and profits:</p>
            </div>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg bg-red-900/40 border border-red-800/30 hover:bg-red-800/50 transition-colors duration-200"
                >
                  <div className="text-xl md:text-2xl">{problem.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-100 mb-1 text-sm md:text-base">{problem.title}</h4>
                    <p className="text-gray-200 text-xs md:text-sm">{problem.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-4">Synq Solution</h3>
              <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8">How we transform your business:</p>
            </div>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg bg-green-900/20 border border-green-800/30"
                >
                  <div className="text-xl md:text-2xl text-green-400">
                    <solution.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm md:text-base">{solution.title}</h4>
                    <p className="text-gray-300 text-xs md:text-sm">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ROI Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-700/50"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Typical Results</h3>
            <p className="text-sm md:text-base text-gray-300">What our clients achieve in the first 3 months:</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center border-l border-cyan-900/40 pl-3 md:pl-6 first:border-l-0 first:pl-0">
              <AnimatedCounter end={30} suffix="%" />
              <div className="text-xs md:text-sm text-gray-300">Faster Order Processing</div>
              <div className="text-xs text-gray-400 mt-1">Faster order fulfillment</div>
            </div>
            <div className="text-center border-l border-cyan-900/40 pl-3 md:pl-6">
              <AnimatedCounter end={50} suffix="%" />
              <div className="text-xs md:text-sm text-gray-300">Reduction in Order Errors</div>
              <div className="text-xs text-gray-400 mt-1">Fewer WhatsApp order mistakes</div>
            </div>
            <div className="text-center border-l border-cyan-900/40 pl-3 md:pl-6">
              <AnimatedCounter end={25} suffix="%" />
              <div className="text-xs md:text-sm text-gray-300">Increase in Revenue</div>
              <div className="text-xs text-gray-400 mt-1">More revenue through repeat buyers</div>
            </div>
            <div className="text-center border-l border-cyan-900/40 pl-3 md:pl-6">
              <AnimatedCounter end={4} suffix="hrs" />
              <div className="text-xs md:text-sm text-gray-300">Daily Time Saved</div>
              <div className="text-xs text-gray-400 mt-1">Daily time saved through automation</div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-sm md:text-lg text-gray-300 italic">
              Your time back. Your customers retained. Your business synced.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
