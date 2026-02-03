"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "2", label: "Active Internships" },
]

export default function PortfolioStats() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 md:px-8 bg-gradient-to-r from-background via-background to-background overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-grid-pattern opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-4">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Portfolio Metrics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">By The Numbers</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A snapshot of my journey in full-stack development and innovation.
          </p>
        </motion.div>

        {/* Stats grid with interactive hover effect */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-gold/20 via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
              />

              {/* Card */}
              <div className="glass rounded-lg p-6 md:p-8 text-center relative z-10 group-hover:bg-white/8 transition-all h-full flex flex-col items-center justify-center">
                {/* Icon placeholder - elegant line */}
                <motion.div
                  className="w-12 h-12 rounded-full border-2 border-gold/40 flex items-center justify-center mb-4 group-hover:border-gold transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-6 h-1 bg-gold/60 group-hover:bg-gold transition-colors" />
                </motion.div>

                {/* Value */}
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-gold mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>

                {/* Label */}
                <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>

                {/* Animated bottom line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
