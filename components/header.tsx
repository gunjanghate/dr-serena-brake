"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Calendar } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  const headerY = useTransform(scrollY, [0, 100], [16, 4])
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.98])
  const headerOpacity = useTransform(scrollY, [0, 50], [0.95, 0.98])

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", updateScrolled)
    return () => window.removeEventListener("scroll", updateScrolled)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* Fixed rounded header */}
      <motion.header
        style={{
          y: headerY,
          scale: headerScale,
          backdropFilter: "blur(20px)",
        }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      >
        <motion.div
          style={{ opacity: headerOpacity }}
          className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/50 px-6 py-4 mx-4 w-full max-w-7xl"
        >
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 flex-shrink-0"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-medium text-lg font-serif">SB</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-medium text-slate-800 font-serif">Dr. Serena Blake</h1>
                <p className="text-xs text-slate-500 font-sans">Clinical Psychologist</p>
              </div>
            </motion.div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-slate-600 hover:text-teal-600 font-medium transition-colors duration-200 relative group whitespace-nowrap font-sans"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-teal-600 hover:bg-teal-50 whitespace-nowrap font-sans"
              >
                <Phone className="w-4 h-4 mr-2" />
                (323) 555-0192
              </Button>
              <Button
                size="sm"
                className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg transition-all duration-300 group whitespace-nowrap font-sans"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-700 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consult
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-teal-600 transition-colors duration-200 flex-shrink-0"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-24 left-0 right-0 z-40 flex justify-center lg:hidden overflow-hidden"
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/50 p-4 mx-4 w-full max-w-md">
          <div className="space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-slate-600 hover:text-teal-600 font-medium transition-colors duration-200 font-sans"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 space-y-2">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-slate-600 hover:text-teal-600 hover:bg-teal-50 font-sans"
              >
                <Phone className="w-4 h-4 mr-2" />
                (323) 555-0192
              </Button>
              <Button
                size="sm"
                className="w-full relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600 text-white group font-sans"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-700 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consult
                </span>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
