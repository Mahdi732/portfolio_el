"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import ProjectModal from "./project-modal"

const projects = [
  {
    id: 1,
    title: "Football Tactics",
    subtitle: "Interactive coaching platform",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/football-tactics-app.jpg",
    description:
      "A comprehensive web application for football coaches to visualize, analyze, and share tactical formations.",
    category: "Web App",
  },
  {
    id: 2,
    title: "RealEstatePro",
    subtitle: "Property management system",
    tech: ["Next.js", "TypeScript", "Prisma"],
    image: "/real-estate-platform.jpg",
    description: "Full-featured real estate platform with advanced search, filtering, and agent management.",
    category: "SaaS",
  },
  {
    id: 3,
    title: "Tasty Delivery",
    subtitle: "Multi-vendor food platform",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    image: "/food-delivery-app.jpg",
    description: "Multi-vendor food delivery application with payment processing and real-time notifications.",
    category: "Web App",
  },
  {
    id: 4,
    title: "Referee Training",
    subtitle: "Educational mobile platform",
    tech: ["React Native", "Firebase", "Node.js"],
    image: "/referee-training.jpg",
    description: "Mobile-first training platform for sports referees with certification tracking and offline mode.",
    category: "Mobile",
  },
]

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="relative py-32 md:py-40 px-4 md:px-8 bg-background overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-end gap-4">
            <h2 className="text-6xl md:text-7xl font-semibold text-foreground">Selected Work</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1.5 bg-gradient-to-r from-gold to-gold/30 mb-3"
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-6 text-lg max-w-2xl"
          >
            A curated selection of recent projects showcasing design, development, and problem-solving.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className={`group cursor-pointer ${idx === 0 || idx === 3 ? "lg:col-span-2" : ""}`}
            >
              <motion.div className="relative">
                {/* Shadow layer */}
                <motion.div
                  className="absolute -inset-4 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 0.5 }}
                />

                {/* Main card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-black border border-white/10 rounded-2xl overflow-hidden"
                >
                  {/* Image container with scale on hover */}
                  <div className="relative h-56 lg:h-80 overflow-hidden bg-white/5">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Overlay on hover */}
                    <motion.div
                      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                      whileHover={{ opacity: 1, backdropFilter: "blur(4px)" }}
                      className="absolute inset-0 bg-black/40 flex items-end justify-between p-6"
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <motion.span
                          initial={{ y: 10, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full backdrop-blur-sm"
                        >
                          {project.category}
                        </motion.span>
                      </div>
                      <motion.span
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-white text-sm font-medium"
                      >
                        View →
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Content section */}
                  <div className="p-8">
                    <motion.div initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                      <p className="text-white/50 text-xs uppercase tracking-widest mb-2">{project.subtitle}</p>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                        {project.title}
                      </h3>
                    </motion.div>

                    {/* Tech tags */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileHover={{ scale: 1 }}
                          className="px-3 py-1 bg-white/5 border border-white/10 text-white/60 text-xs rounded-lg hover:border-white/30 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  )
}
