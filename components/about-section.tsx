"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"

export default function AboutSection() {
  return (
    <section id="about" className="relative py-40 px-8 bg-black border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <ScrollReveal direction="up">
            <div className="space-y-8">
              <div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  transition={{ duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-white to-white/30 mb-6"
                />
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">About Me</h2>
              </div>

              <p className="text-lg text-white/70 leading-relaxed max-w-lg">
                I'm Mahdi El Rahhab, a passionate full-stack developer with expertise in modern web technologies. I
                specialize in building interactive, performant applications using React, Next.js, and Node.js. My focus
                is on creating seamless user experiences with clean, maintainable code.
              </p>

              <p className="text-lg text-white/70 leading-relaxed max-w-lg">
                Currently undertaking a full-stack development internship where I'm building innovative solutions
                including a tactical football planning application and an educational referee training platform. I'm
                deeply interested in advanced animations, DevOps practices, and creating scalable architectures.
              </p>

              <motion.div className="flex flex-col sm:flex-row gap-4 pt-8">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-black font-semibold hover:bg-white/90 transition-all inline-flex items-center gap-2 rounded-lg"
                >
                  Get In Touch
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "30+", label: "Technologies Mastered" },
                { number: "2", label: "Production Apps" },
                { number: "100%", label: "Full Stack Capable" },
                { number: "∞", label: "Learning Potential" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/8 to-white/2 border border-white/15 rounded-2xl p-6 hover:bg-white/10 hover:border-white/30 transition-all group"
                >
                  <p className="text-4xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                    {stat.number}
                  </p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
