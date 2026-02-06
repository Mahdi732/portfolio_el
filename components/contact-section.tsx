"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { ScrollReveal } from "./scroll-reveal"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "elmahdirahhab@gmail.com",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })

        setTimeout(() => {
          setSubmitted(false)
        }, 3000)
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setErrors({ submit: "Failed to send message. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const socialLinks = [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mahdi-el-rahhab-62596a337/",
      icon: "in",
    },
    {
      label: "GitHub",
      url: "https://github.com/Mahdi732",
      icon: "gh",
    },
  ]

  return (
    <section id="contact" className="relative py-32 md:py-40 px-4 md:px-8 bg-background border-t border-border overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/4 rounded-full blur-3xl opacity-25 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
        <ScrollReveal direction="up">
          <div className="mb-20">
            <div className="flex items-end gap-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground">Get In Touch</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-white to-white/30 mb-3"
              />
            </div>
            <p className="text-muted-foreground mt-6 text-lg max-w-2xl">
              Have a project in mind? Let's discuss opportunities and create something amazing together. Reach out
              through the form or connect on social media.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-12">
              {[
                { label: "Email", value: "elmahdirahhab@gmail.com", href: "mailto:elmahdirahhab@gmail.com" },
                { label: "Location", value: "Safi, Morocco", href: "#" },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-muted-foreground text-xs uppercase tracking-widest mb-3 font-medium">{item.label}</p>
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 8 }}
                    className="text-foreground hover:text-gold transition-colors text-xl font-semibold"
                  >
                    {item.value}
                  </motion.a>
                </motion.div>
              ))}

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="pt-12 border-t border-border"
              >
                <p className="text-muted-foreground text-xs uppercase tracking-widest mb-6 font-medium">Connect</p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -6, scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 + idx * 0.08 }}
                      viewport={{ once: true }}
                      className="px-6 py-3 border border-white/20 text-white/70 hover:border-white hover:text-white transition-all font-medium rounded-lg group"
                    >
                      <span className="flex items-center gap-2">
                        {social.label}
                        <motion.span className="inline-block" groupHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                          →
                        </motion.span>
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right" delay={0.1}>
            <motion.form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
                { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((field, idx) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor={field.name} className="block text-sm font-medium text-white/80 mb-3">
                    {field.label} <span className="text-white/30">*</span>
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    aria-invalid={!!errors[field.name]}
                    aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                    className="w-full px-5 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/8 transition-all"
                  />
                  {errors[field.name] && (
                    <p id={`${field.name}-error`} className="text-red-400 text-sm mt-2">
                      {errors[field.name]}
                    </p>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-3">
                  Message <span className="text-white/30">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full px-5 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/8 transition-all resize-none"
                />
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-sm mt-2">
                    {errors.message}
                  </p>
                )}
              </motion.div>

              {errors.submit && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm"
                >
                  {errors.submit}
                </motion.p>
              )}

              <motion.button
                type="submit"
                disabled={submitted || isLoading}
                whileHover={!isLoading && !submitted ? { scale: 1.02 } : {}}
                whileTap={!isLoading && !submitted ? { scale: 0.98 } : {}}
                className="w-full px-6 py-4 bg-white text-black font-semibold hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-lg"
              >
                {isLoading ? (
                  <motion.span
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Sending...
                  </motion.span>
                ) : submitted ? (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Message sent!
                  </motion.span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
