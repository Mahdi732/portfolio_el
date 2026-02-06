"use client"

import { motion } from "framer-motion"
import PortfolioCard from "./portfolio-card"

const portfolioItems = [
  {
    id: 1,
    title: "Design System",
    gradient: "from-pink-300 via-cyan-200 to-lime-200",
  },
  {
    id: 2,
    title: "Motion Design",
    gradient: "from-cyan-300 via-lime-200 to-pink-200",
  },
  {
    id: 3,
    title: "UI Components",
    gradient: "from-yellow-200 via-pink-300 to-cyan-200",
  },
  {
    id: 4,
    title: "Brand Identity",
    gradient: "from-lime-300 via-cyan-200 to-pink-300",
  },
]

export default function PortfolioGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-20 px-8 md:px-16 lg:px-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Featured Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <PortfolioCard title={item.title} gradient={item.gradient} icon={item.icon} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
