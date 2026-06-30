'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Mission', href: '#mission' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 40))
    return () => unsub()
  }, [scrollY])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-white shadow-md" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav('#home') }}
              className="flex-shrink-0"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src="/logo.png"
                alt="Shivarun Pharmaceuticals"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                  className="relative text-sm font-semibold tracking-wide text-foreground hover:text-[#CC1414] transition-colors duration-200 group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CC1414] transition-all duration-300 group-hover:w-full rounded-full" />
                </motion.a>
              ))}
            </nav>

            {/* CTA */}
            <motion.a
              href="tel:+918849085784"
              className="hidden md:flex items-center gap-2 bg-[#CC1414] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#A00E0E] transition-colors duration-200 shadow-lg shadow-[#CC1414]/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </motion.a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-foreground hover:text-[#CC1414] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 bg-white md:hidden"
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: mobileOpen ? 1 : 0, x: mobileOpen ? '0%' : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              className="text-2xl font-bold text-foreground hover:text-[#CC1414] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="tel:+918849085784"
            className="flex items-center gap-2 bg-[#CC1414] text-white px-8 py-3 rounded-full text-base font-semibold mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: mobileOpen ? 1 : 0 }}
            transition={{ delay: 0.5 }}
          >
            <Phone className="w-4 h-4" />
            Call Us
          </motion.a>
        </div>
      </motion.div>
    </>
  )
}
