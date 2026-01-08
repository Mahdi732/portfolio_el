"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface Project {
  id: number
  title: string
  subtitle?: string
  summary: string
  tech: string[]
  image: string
  description: string
  details?: string
  category?: string
}

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-3xl bg-black border border-white/10 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-white" />
          </motion.button>

          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                {project.category && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full mb-3"
                  >
                    {project.category}
                  </motion.span>
                )}
                <h2 className="text-4xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-white/60">{project.summary}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      className="px-4 py-2 bg-white/10 text-white/80 text-sm rounded-lg border border-white/20 hover:border-white/40 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-3">Description</h3>
                <p className="text-white/70 leading-relaxed">{project.description}</p>
              </div>

              {project.details && (
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-sm">{project.details}</p>
                </div>
              )}

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium hover:bg-white/90 transition-colors rounded-lg"
              >
                Discuss This Project
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
