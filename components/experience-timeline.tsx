"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    id: 1,
    role: "Full-Stack Web Development Internship",
    company: "Qnitra, Maroc",
    period: "Juin 2025 – Août 2025",
    type: "Internship",
    projects: [
      {
        name: "Football Tactical Planning App",
        description: "Web application for football managers for team preparation and tactical game plans",
        stack: ["React.js", "Konva.js", "Laravel", "Framer Motion", "PostgreSQL"],
        role: "Full Stack Development",
      },
      {
        name: "Educational Referee Training",
        description: "Mobile & web application designed for referee training and education",
        stack: ["React Native", "GitHub", "VS Code", "Postman", "DataGrip"],
        role: "Frontend Development",
      },
    ],
    highlights: [
      "Developed two production applications",
      "Implemented interactive field interface with Konva.js",
      "Built React Native cross-platform solution",
      "Worked with PostgreSQL database architecture",
    ],
  },
]

const ExperienceCard = ({ item, index }: { item: (typeof experiences)[0]; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Main card */}
      <motion.div
        whileHover={{ y: -6 }}
        className="glass rounded-lg p-8 md:p-10 overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="inline-block px-3 py-1.5 mb-4 bg-gold/10 border border-gold/30 rounded-full"
            >
              <span className="text-xs font-semibold text-gold uppercase tracking-widest">{item.type}</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.1 + 0.1 }}
              className="text-3xl md:text-4xl font-semibold text-foreground mb-2"
            >
              {item.role}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.1 + 0.15 }}
              className="text-white/60 text-lg"
            >
              {item.company}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="text-white/40 text-sm mt-2"
            >
              {item.period}
            </motion.p>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ delay: index * 0.1 + 0.25, duration: 0.6 }}
            className="h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent mb-8"
          />

          {/* Projects section */}
          <div className="mb-8">
            <motion.h4
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-6"
            >
              Key Projects
            </motion.h4>

            <div className="space-y-6">
              {item.projects.map((project, pIdx) => (
                <motion.div
                  key={pIdx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 + 0.3 + pIdx * 0.1 }}
                  className="relative bg-white/3 border border-white/10 rounded-lg p-5 hover:bg-white/5 transition-all"
                >
                  <h5 className="font-semibold text-white mb-2">{project.name}</h5>
                  <p className="text-white/60 text-sm mb-4">{project.description}</p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.stack.map((tech, tIdx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.1 + 0.35 + tIdx * 0.05 }}
                        className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs text-white/70 font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <p className="text-xs text-white/40">{project.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <motion.h4
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-4"
            >
              Key Achievements
            </motion.h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {item.highlights.map((highlight, hIdx) => (
                <motion.div
                  key={hIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1 + 0.4 + hIdx * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.45 + hIdx * 0.08 }}
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 border border-white/40 flex items-center justify-center mt-0.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </motion.span>
                  <span className="text-white/70 text-sm leading-relaxed">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 pointer-events-none"
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function ExperienceTimeline() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative py-40 px-8 bg-black border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-end gap-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">Experience</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-white to-white/30 mb-3"
            />
          </div>
          <p className="text-white/60 text-lg mt-6 max-w-2xl">
            Building innovative solutions with modern technologies, working across full-stack development with a focus
            on interactive user experiences.
          </p>
        </motion.div>

        {/* Experience cards */}
        <div ref={containerRef} className="space-y-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={exp.id} item={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
