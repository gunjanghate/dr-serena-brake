import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD - Licensed Clinical Psychologist in Los Angeles",
  description:
    "Evidence-based therapy with heart. Dr. Serena Blake provides compassionate psychological services for anxiety, relationships, and trauma recovery in Los Angeles, CA.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
