import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "El Mahdi Rahhab | Full Stack Developer",
  description:
    "Full Stack Developer specializing in modern web technologies, performance optimization, and user-centric design. Explore my portfolio of innovative projects.",
  metadataBase: new URL("https://elmahdi-portfolio.com"),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://elmahdi-portfolio.com",
    title: "El Mahdi Rahhab | Full Stack Developer",
    description: "Full Stack Developer with expertise in React, Next.js, Node.js and modern web technologies.",
    siteName: "El Mahdi Rahhab Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </head>
      <body className={`${_geist.className} font-sans antialiased bg-background text-foreground selection:bg-gold selection:text-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
