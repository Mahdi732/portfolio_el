"use client"

import { motion } from "framer-motion"

interface PortfolioCardProps {
  title: string
  gradient: string
}

export default function PortfolioCard({ title, gradient }: PortfolioCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`} />

      {/* Dark overlay on hover */}
      <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 0.1 }} className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
        <motion.h3 initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }} className="text-2xl font-bold text-slate-900">
          {title}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm"
        >
          <span className="text-slate-900 font-semibold">Explore →</span>
        </motion.div>
      </div>
    </motion.div>
  )
}
