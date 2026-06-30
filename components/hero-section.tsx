'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

const slides = [
  {
    id: 1,
    image: '/images/hero-bg.png',
    badge: 'WHO-GMP Certified',
    headline: 'A New Era of',
    highlight: 'Trusted Healthcare',
    sub: 'Delivering affordable, reliable pharmaceutical and nutraceutical solutions across India and emerging global markets.',
    cta: 'Explore Products',
    ctaHref: '#products',
  },
  {
    id: 3,
    image: '/images/hero-3.png',
    badge: 'Global Reach',
    headline: 'Expanding Access to',
    highlight: 'Quality Medicines',
    sub: 'From Gandhinagar to global markets — building a trusted healthcare brand that empowers every stage of life.',
    cta: 'About Us',
    ctaHref: '#about',
  },
]

const stats = [
  { value: 'WHO-GMP', label: 'Certified Manufacturing' },
  { value: '100+', label: 'Product Portfolio' },
  { value: 'PAN India', label: 'Distribution Network' },
  { value: '10+', label: 'Therapeutic Segments' },
]

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden w-full h-full">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative flex-[0_0_100%] h-full">
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E]/90 via-[#1E1E1E]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl">
                    <AnimatePresence mode="wait">
                      {selectedIndex === index && (
                        <motion.div
                          key={`content-${slide.id}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {/* Badge */}
                          <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-[#CC1414]/20 border border-[#CC1414]/50 text-[#E53535] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-[#CC1414] rounded-full animate-pulse" />
                            {slide.badge}
                          </motion.div>

                          {/* Headline */}
                          <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-2"
                          >
                            {slide.headline}
                          </motion.h1>
                          <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#CC1414] mb-6"
                          >
                            {slide.highlight}
                          </motion.h1>

                          {/* Sub */}
                          <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-base sm:text-lg text-white/80 leading-relaxed mb-10 max-w-xl"
                          >
                            {slide.sub}
                          </motion.p>

                          {/* CTAs */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="flex flex-wrap gap-4 mb-32"
                          >
                            <a
                              href={slide.ctaHref}
                              onClick={(e) => {
                                e.preventDefault()
                                document.querySelector(slide.ctaHref)?.scrollIntoView({ behavior: 'smooth' })
                              }}
                              className="group flex items-center gap-2 bg-[#CC1414] hover:bg-[#A00E0E] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#CC1414]/40 hover:shadow-xl hover:shadow-[#CC1414]/50 hover:-translate-y-0.5"
                            >
                              {slide.cta}
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                              href="#contact"
                              onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                              }}
                              className="flex items-center gap-2 border border-white/40 hover:border-white/80 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                            >
                              Get in Touch
                            </a>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-24 right-8 md:right-16 flex items-center gap-3 z-10">
        <button
          onClick={scrollPrev}
          className="w-11 h-11 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#CC1414] hover:border-[#CC1414] transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="w-11 h-11 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#CC1414] hover:border-[#CC1414] transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-400 ${
              selectedIndex === i
                ? 'w-8 bg-[#CC1414]'
                : 'w-4 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10 z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-4 px-4">
                <span className="font-heading text-xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-white/60 mt-0.5 text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
