"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PortfolioStats from "@/components/portfolio-stats"
import ExperienceTimeline from "@/components/experience-timeline"
import ProjectsGrid from "@/components/projects-grid"
import TechnologiesGrid from "@/components/technologies-grid"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioStats />
      <ExperienceTimeline />
      <ProjectsGrid />
      <TechnologiesGrid />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
