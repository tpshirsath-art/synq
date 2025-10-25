'use client'

import { motion } from 'framer-motion'

export default function Pricing() {

  const plans = [
    {
      name: 'Sprint',
      description: 'Perfect for getting started quickly',
      price: '₹60,000',
      originalPrice: '₹75,000',
      features: [
        'Custom eCommerce website',
        'Up to 100 product pages',
        'Payment gateway setup (Razorpay / Paytm / Cashfree etc.)',
        'Mobile-responsive design',
        'Basic dashboard access to manage orders, products, and inventory',
        'Training & 30-day support post launch',
        'Timeline: 1-2 weeks',
        'Deliverable: Website ready to accept live orders'
      ],
      cta: 'Get Started',
      popular: false,
      color: 'primary'
    },
    {
      name: 'Growth',
      description: 'Perfect for growing businesses',
      price: '₹75,000',
      originalPrice: '₹90,000',
      features: [
        'Everything in Sprint',
        'Admin Management App (Android) for order updates, inventory & analytics',
        'Enhanced dashboard for managing stock, pricing, and customer details',
        'Analytics setup (Google Analytics + reporting dashboard)',
        'Basic automation setup (email order confirmations, etc.)',
        'Timeline: 2 weeks',
        'Deliverable: Website + Admin App'
      ],
      cta: 'Start Growing',
      popular: false,
      color: 'accent'
    },
    {
      name: 'Build',
      description: 'Most popular for established businesses or growing D2C brands',
      price: '₹90,000',
      originalPrice: '₹1,10,000',
      features: [
        'Everything in Growth',
        'Mobile Customer App (Android)',
        'Shiprocket Integration (courier, tracking, COD, and returns setup)',
        'WhatsApp & Email Notifications (order confirmation, shipment, delivery)',
        'Get your customized logo',
        'Performance optimization & automated backups',
        'Dedicated 60-day launch support + training',
        'Timeline: 2-3 weeks',
        'Deliverable: Website + App + Admin App + Logistics + Automations'
      ],
      cta: 'Contact Sales',
      popular: true,
      color: 'purple'
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="section-padding bg-gray-800/30 px-6 pb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-center">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 text-center">
            Choose the plan that fits your business needs. All plans are one-time payments and include setup, training, and ongoing support.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative card group transition-all duration-300 p-4 md:p-6 ${
                plan.popular 
                  ? 'ring-2 ring-accent-500 shadow-2xl scale-105' 
                  : 'hover:ring-2 hover:ring-accent-500 hover:shadow-2xl hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-accent-500 to-primary-500 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm md:text-base text-gray-300 mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl md:text-4xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-base md:text-lg text-gray-500 line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">
                    one-time cost
                  </p>
                </div>
              </div>

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 md:py-3 px-4 md:px-6 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                  plan.popular
                    ? 'bg-gradient-to-r from-accent-600 to-primary-600 text-white hover:from-accent-700 hover:to-primary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'border-2 border-primary-600 text-primary-600 group-hover:bg-gradient-to-r group-hover:from-accent-600 group-hover:to-primary-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:transform group-hover:-translate-y-0.5'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-gray-800/50 rounded-xl md:rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-xs md:text-sm text-gray-300">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>Free setup & migration</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>Training & documentation</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>Hosting for 2 years included</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
