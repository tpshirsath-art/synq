'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, LayoutDashboard, Package, Truck, BarChart3 } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Ecommerce Website',
      description: 'Professional catalog, product pages, and seamless checkout experience',
      features: ['Product catalog', 'SEO optimized', 'Mobile responsive', 'Fast checkout']
    },
    {
      icon: Smartphone,
      title: 'Buyer Mobile App',
      description: 'Quick reorders and instant push notifications',
      features: ['Quick reorders', 'Saved buyers', 'Push notifications', 'Offline support']
    },
    {
      icon: LayoutDashboard,
      title: 'Admin Dashboard',
      description: 'Complete order automation, inventory management, and business insights',
      features: ['Order automation', 'Inventory sync', 'Customer management', 'Business analytics']
    },
    {
      icon: Package,
      title: 'Shipping Automation',
      description: 'Automated order fulfillment, label generation, and real-time shipping updates',
      features: ['Auto label generation', 'Carrier selection', 'Tracking updates', 'Delivery notifications']
    },
    {
      icon: Truck,
      title: 'Shipping Integration',
      description: 'Multi-carrier shipping, real-time tracking, and automated logistics management',
      features: ['Multi-carrier support', 'Real-time tracking', 'Auto shipping labels', 'Delivery optimization']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Growth',
      description: 'Track conversion rates, customer behavior, and run growth experiments',
      features: ['Sales analytics', 'Customer insights', 'Growth experiments', 'ROI tracking']
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-800/30 px-6 pb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-center">
            Complete <span className="gradient-text">Ecommerce Solution</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-400 mb-4 text-center">
            Everything you need to go from chat-based orders to a full ecommerce system.
          </p>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Everything you need to transform from manual IndiaMART orders to a fully automated ecommerce business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="card group hover:scale-105 hover:border-cyan-500/50 transition-all duration-300 p-4 md:p-6"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 text-cyan-400 icon-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <service.icon size={24} />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                {service.title}
              </h3>
              
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs md:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 text-sm md:text-base w-full md:w-auto">
            Get your ecommerce system built in 7 days →
          </button>
        </motion.div>

        {/* Integration Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 bg-gray-900/50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-700/50"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">How It All Works Together</h3>
            <p className="text-sm md:text-base text-gray-300">Seamless integration across all touchpoints</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl md:text-2xl">📱</span>
              </div>
              <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Customer Orders</h4>
              <p className="text-xs md:text-sm text-gray-300">Via website or mobile app</p>
              <p className="text-xs text-gray-400 mt-2 italic">"Your customers place orders 24/7 without any manual intervention"</p>
            </div>
            
            <div className="hidden md:block">
              <div className="w-full h-0.5 animated-connection-line"></div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl md:text-2xl">⚙️</span>
              </div>
              <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Auto Processing</h4>
              <p className="text-xs md:text-sm text-gray-300">Admin dashboard handles everything</p>
              <p className="text-xs text-gray-400 mt-2 italic">"Orders get processed, inventory updates, and payments are confirmed automatically"</p>
            </div>
            
            <div className="hidden md:block">
              <div className="w-full h-0.5 animated-connection-line" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl md:text-2xl">📦</span>
              </div>
              <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Shipping Automation</h4>
              <p className="text-xs md:text-sm text-gray-300">Auto fulfillment & tracking</p>
              <p className="text-xs text-gray-400 mt-2 italic">"Shipping labels are generated and customers get real-time tracking updates"</p>
            </div>
            
            <div className="hidden md:block">
              <div className="w-full h-0.5 animated-connection-line" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl md:text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Analytics</h4>
              <p className="text-xs md:text-sm text-gray-300">Track performance & growth</p>
              <p className="text-xs text-gray-400 mt-2 italic">"You get insights on sales trends, customer behavior, and growth opportunities"</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
