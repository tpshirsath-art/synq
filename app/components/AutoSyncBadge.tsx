'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Wifi } from 'lucide-react'

export default function AutoSyncBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
    >
      <div className="bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm rounded-full px-2 py-1 md:px-4 md:py-3 shadow-lg border border-green-400/30 flex items-center gap-1.5 md:gap-3 text-white animate-cyan-pulse-glow-mobile md:animate-cyan-pulse-glow">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <CheckCircle className="w-3 h-3 md:w-5 md:h-5 text-green-100" />
        </motion.div>
        
        <div className="flex flex-col">
          <span className="text-xs font-semibold leading-tight">
            Auto-Sync Active
          </span>
          <span className="text-xs text-green-100/80 leading-tight hidden md:block">
            live data every 5 seconds
          </span>
        </div>
        
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Wifi className="w-2.5 h-2.5 md:w-4 md:h-4 text-green-100" />
        </motion.div>
      </div>
    </motion.div>
  )
}
