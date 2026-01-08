"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedUnderlineProps {
  children: ReactNode
}

export default function AnimatedUnderline({ children }: AnimatedUnderlineProps) {
  return (
    <motion.span className="relative inline-block">
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-white"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.span>
  )
}
