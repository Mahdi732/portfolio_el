"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ScrollReveal } from "./scroll-reveal"

const educationItems = [
  {
    id: 1,
    school: "YOUCODE - UM6P",
    degree: "Full Stack Web and Mobile Development",
    year: "2024 - 2026",
    highlights: [
      "Mastered React, Next.js, and Node.js ecosystems",
      "Advanced Framer Motion and GSAP animations",
      "Docker, Kubernetes, and CI/CD pipelines",
      "Database design and optimization",
    ],
  },
  {
    id: 2,
    school: "Lycée Salah Din Ayoubi",
    degree: "Bachelor's Degree in Physical Sciences",
    year: "2023 - 2024",
    highlights: [
      "Strong foundation in mathematics and physics",
      "Development of analytical thinking skills",
      "Preparation for technical specialization",
      "Academic excellence in STEM subjects",
    ],
  },
]

export default function EducationSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="education" className="relative py-32 md:py-40 px-4 md:px-8 bg-background border-t border-border overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/4 rounded-full blur-3xl opacity-25 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto z-10">
        <ScrollReveal direction="up">
          <div className="mb-20">
            <div className="flex items-end gap-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground">Education & Learning</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1.5 bg-gradient-to-r from-gold to-gold/30 mb-3"
              />
            </div>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
              Continuous learning through formal education and hands-on project experience with the latest web
              technologies.
            </p>
          </div>
        </ScrollReveal>

        <div ref={containerRef} className="space-y-6">
          {educationItems.map((item, idx) => (
            <ScrollReveal key={item.id} direction="up" delay={idx * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="glass rounded-lg p-8 hover:bg-white/8 hover:border-gold/30 transition-all group overflow-hidden"
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/5 opacity-0 pointer-events-none"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{item.degree}</h3>
                      <p className="text-white/60 text-lg">{item.school}</p>
                    </div>
                    <span className="text-white/40 text-sm whitespace-nowrap pt-1">{item.year}</span>
                  </div>

                  {/* Divider */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: idx * 0.1 + 0.2, duration: 0.6 }}
                    className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent mb-6"
                  />

                  {/* Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.highlights.map((highlight, hIdx) => (
                      <motion.div
                        key={hIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + 0.3 + hIdx * 0.08 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: idx * 0.1 + 0.35 + hIdx * 0.08 }}
                          viewport={{ once: true }}
                          className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 border border-white/40 flex items-center justify-center mt-0.5"
                        >
                          <span className="w-2 h-2 rounded-full bg-white" />
                        </motion.span>
                        <span className="text-white/70 text-sm">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
