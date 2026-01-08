"use client"

import { motion } from "framer-motion"

const FloatingShape = ({ delay, x, y, rotation, duration }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.6, scale: 1 }}
    transition={{ duration: 0.8, delay }}
    className="absolute"
    style={{ left: x, top: y }}
  >
    <motion.div
      animate={{ rotate: rotation ? 360 : 0, y: [0, -20, 0] }}
      transition={{ duration: duration || 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      {/* Decorative gradient shapes */}
      <div className="relative w-48 h-48 rounded-3xl blur-2xl opacity-40" />
    </motion.div>
  </motion.div>
)

export default function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Top left gradient blob */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-pink-300 via-purple-200 to-cyan-200 rounded-full mix-blend-screen filter blur-3xl opacity-30"
      />

      {/* Top right shape */}
      <motion.div
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute top-40 right-32 w-72 h-72 bg-gradient-to-br from-cyan-300 via-lime-200 to-pink-200 rounded-3xl mix-blend-screen filter blur-3xl opacity-25"
        style={{ transform: "rotate(-15deg)" }}
      />

      {/* Middle left triangle-ish */}
      <motion.div
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute left-1/4 top-1/3 w-64 h-64 bg-gradient-to-br from-lime-300 to-yellow-200 clip-path opacity-20 filter blur-3xl"
        style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
      />

      {/* Right side geometric shape */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-gradient-to-br from-pink-300 via-cyan-200 to-lime-300 opacity-25 filter blur-3xl"
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
      />

      {/* Bottom gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-t from-slate-900 via-transparent to-transparent"
      />
    </div>
  )
}
