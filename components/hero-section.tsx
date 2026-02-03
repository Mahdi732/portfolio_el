"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-background pt-24 pb-32 px-4 md:px-8 overflow-hidden flex items-center justify-center border-b border-border"
    >
      {/* Premium background gradient elements */}
      <motion.div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <motion.div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <motion.div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/3 rounded-full blur-2xl" />

      {/* Main content grid with asymmetric layout */}
      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left text block - spans 5 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1.5 bg-gradient-to-r from-gold to-gold/30"
              />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight tracking-tight"
              >
                Full-Stack
                <br />
                Developer &
                <br />
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Innovator</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-md body-large"
            >
              Crafting elegant web experiences with modern technologies. Specializing in React, Next.js, Node.js, and
              premium animations. Building products that perform, impress, and scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex items-center gap-2 text-muted-foreground text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
              <span>Based in Safi, Morocco</span>
            </motion.div>

            <motion.a
              href="#technologies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ x: 6 }}
              className="inline-flex items-center gap-3 pt-6 text-foreground font-medium group text-sm"
            >
              <span>Explore my tech stack</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.a>
          </motion.div>

          <motion.div className="lg:col-span-7 relative h-96 lg:h-full">
            {/* Layered geometric shapes */}
            <motion.div
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 right-0 w-64 h-64 border-2 border-white/20 transform -rotate-12"
              style={{ y }}
            />
            <motion.div
              initial={{ opacity: 0, rotate: 20 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-32 right-32 w-56 h-56 bg-white/5 rounded-3xl transform rotate-45"
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 right-0 w-80 h-96 bg-gradient-to-tl from-white/10 to-transparent rounded-3xl"
            />

            {/* Additional geometric accents */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-20 left-10 w-40 h-40 border border-white/15 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/3 rounded-2xl transform -rotate-45"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg className="w-6 h-6 stroke-white/30" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </motion.div>
    </section>
  )
}
