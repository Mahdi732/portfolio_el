"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "À propos", href: "#about" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating toggle button - top right corner */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="glass fixed top-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center hover:border-gold/50 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div className="relative w-5 h-5 flex flex-col items-center justify-center gap-1.5">
          <motion.span
            className="absolute w-5 h-px bg-foreground rounded-full"
            initial={false}
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 6 : -3,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-5 h-px bg-foreground rounded-full"
            initial={false}
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute w-5 h-px bg-foreground rounded-full"
            initial={false}
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -6 : 3,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.button>

      {/* Floating sidebar panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
              transition={{ duration: 0.2 }}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-40 w-80 h-screen bg-background/98 backdrop-blur-xl border-l border-border pt-24 px-8"
            >
              <nav className="flex flex-col gap-8">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    className="text-xl text-white/70 hover:text-white transition-colors relative group"
                  >
                    {item.label}
                    <motion.span
                      className="absolute -bottom-2 left-0 h-px bg-white"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </nav>

              {/* Footer links in sidebar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute bottom-8 left-0 right-0 px-8 flex flex-col gap-4 text-sm text-white/50"
              >
                <a href="#" className="hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Email
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Brand indicator - top left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-8 left-8 z-50"
      >
        <h1 className="text-white font-bold text-lg tracking-tight">
          El Mahdi
          <br />
          <span className="text-white/50 text-sm font-normal">Developer</span>
        </h1>
      </motion.div>
    </>
  )
}
