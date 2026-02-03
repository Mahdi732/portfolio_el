"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mahdi-el-rahhab-62596a337/" },
    { label: "GitHub", url: "https://github.com/Mahdi732" },
  ]

  return (
    <footer className="relative bg-background border-t border-border py-20 px-4 md:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/4 rounded-full blur-3xl opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-2">Mahdi El Rahhab</h3>
            <p className="text-muted-foreground text-sm">Full Stack Developer & Creative Technologist</p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2">
              {["about", "experience", "technologies", "contact"].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link}`}
                    whileHover={{ x: 4 }}
                    className="text-muted-foreground text-sm transition-colors hover:text-gold"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-widest">Social</h4>
            <ul className="space-y-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="text-muted-foreground text-sm transition-colors hover:text-gold flex items-center gap-2"
                  >
                    {social.label}
                    <motion.span
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="mailto:elmahdirahhab@gmail.com"
                  whileHover={{ x: 4 }}
                  className="text-white/50 text-sm transition-colors hover:text-white break-all"
                >
                  elmahdirahhab@gmail.com
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#contact"
                  whileHover={{ x: 4 }}
                  className="text-white/50 text-sm transition-colors hover:text-white"
                >
                  Get In Touch
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent origin-left mb-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50"
        >
          <p>© {currentYear} Mahdi El Rahhab. All rights reserved.</p>
          <p className="text-xs">Crafted with precision, powered by modern technologies.</p>
        </motion.div>
      </div>
    </footer>
  )
}
