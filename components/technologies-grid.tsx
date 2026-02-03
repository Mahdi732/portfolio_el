"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"

const technologies = [
  { name: "JavaScript", category: "Language", proficiency: 90, interest: 100 },
  { name: "TypeScript", category: "Language", proficiency: 80, interest: 100 },
  { name: "PHP", category: "Language", proficiency: 70, interest: 60 },
  { name: "React", category: "Frontend", proficiency: 92, interest: 95 },
  { name: "React Native", category: "Frontend", proficiency: 80, interest: 85 },
  { name: "Vue.js", category: "Frontend", proficiency: 40, interest: 20 },
  { name: "Next.js", category: "Frontend", proficiency: 90, interest: 93 },
  { name: "Alpine.js", category: "Frontend", proficiency: 75, interest: 70 },
  { name: "HTML5", category: "Markup", proficiency: 95, interest: 85 },
  { name: "CSS3", category: "Styling", proficiency: 90, interest: 88 },
  { name: "Tailwind CSS", category: "Styling", proficiency: 93, interest: 92 },
  { name: "Bootstrap", category: "Styling", proficiency: 40, interest: 20 },
  { name: "Chakra UI", category: "Styling", proficiency: 40, interest: 20 },
  { name: "Framer Motion", category: "Animation", proficiency: 88, interest: 95 },
  { name: "GSAP", category: "Animation", proficiency: 55, interest: 50 },
  { name: "anime.js", category: "Animation", proficiency: 60, interest: 55 },
  { name: "Node.js", category: "Backend", proficiency: 88, interest: 92 },
  { name: "Express.js", category: "Backend", proficiency: 85, interest: 88 },
  { name: "NestJS", category: "Backend", proficiency: 82, interest: 90 },
  { name: "Laravel", category: "Backend", proficiency: 75, interest: 70 },
  { name: "MySQL", category: "Database", proficiency: 85, interest: 80 },
  { name: "PostgreSQL", category: "Database", proficiency: 88, interest: 90 },
  { name: "MongoDB", category: "Database", proficiency: 82, interest: 85 },
  { name: "Jest", category: "Testing", proficiency: 80, interest: 75 },
  { name: "Cypress", category: "Testing", proficiency: 78, interest: 80 },
  { name: "Docker", category: "DevOps", proficiency: 80, interest: 85 },
  { name: "Kubernetes", category: "DevOps", proficiency: 70, interest: 80 },
  { name: "Jenkins", category: "DevOps", proficiency: 75, interest: 78 },
  { name: "GitHub Actions", category: "DevOps", proficiency: 82, interest: 85 },
  { name: "Git", category: "Tools", proficiency: 95, interest: 90 },
  { name: "GitHub", category: "Tools", proficiency: 95, interest: 92 },
  { name: "Jira", category: "Tools", proficiency: 85, interest: 80 },
  { name: "VS Code", category: "Tools", proficiency: 95, interest: 90 },
]

const categories = [
  "All",
  "Language",
  "Frontend",
  "Markup",
  "Styling",
  "Animation",
  "Backend",
  "Database",
  "Testing",
  "DevOps",
  "Tools",
]

const TechCard = ({ tech, idx }: { tech: (typeof technologies)[0]; idx: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 10 }}
      transition={{ delay: idx * 0.05, duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        className="glass rounded-lg p-5 cursor-pointer hover:bg-white/8 hover:border-gold/30 transition-all h-full"
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-gold/20 via-transparent to-transparent opacity-0 pointer-events-none"
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10">
          <h3 className="font-semibold text-foreground text-lg mb-1">{tech.name}</h3>
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider font-medium">{tech.category}</p>

          {/* Proficiency bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs text-muted-foreground font-medium">Proficiency</label>
              <span className="text-xs font-semibold text-gold">{tech.proficiency}%</span>
            </div>
            <div className="relative w-full h-2.5 bg-secondary rounded-full overflow-hidden border border-border/50">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${tech.proficiency}%` }}
                transition={{ delay: idx * 0.05 + 0.2, duration: 0.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
              />
            </div>
          </div>

          {/* Interest bar */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs text-white/60">Interest</label>
              <span className="text-xs font-semibold text-white/80">{tech.interest}%</span>
            </div>
            <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${tech.interest}%` }}
                transition={{ delay: idx * 0.05 + 0.3, duration: 0.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-white/70 to-white/30 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl opacity-0 pointer-events-none"
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function TechnologiesGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const filteredTechs =
    activeCategory === "All" ? technologies : technologies.filter((tech) => tech.category === activeCategory)

  return (
    <section id="technologies" className="relative py-40 px-8 bg-black border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-end gap-4 mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">Tech Stack</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-white to-white/30 mb-3"
            />
          </div>

          <p className="text-white/60 text-lg max-w-2xl">
            A comprehensive collection of programming languages, frameworks, and tools I've mastered. Each technology is
            rated by proficiency and personal interest level.
          </p>
        </motion.div>

        <motion.div className="mb-16 flex flex-wrap gap-3">
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === category
                  ? "bg-white text-black shadow-lg shadow-white/20"
                  : "border border-white/30 text-white/70 hover:border-white/60 hover:text-white/90"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Tech grid */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTechs.map((tech, idx) => (
              <TechCard key={tech.name} tech={tech} idx={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        <AnimatePresence>
          {filteredTechs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-16"
            >
              <p className="text-white/50">No technologies in this category</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
