'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    id: 1,
    quote:
      'Shivarun Pharmaceuticals has been an exceptional partner. Their commitment to quality and regulatory compliance gives us complete confidence in every product we stock. Their WHO-GMP certified range has transformed our pharmacy\'s offerings.',
    name: 'Dr. Rajesh Patel',
    designation: 'Chief Pharmacist',
    company: 'HealthCare Plus Pharmacy, Ahmedabad',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'The branded generics range from Shivarun has been a game-changer for our patients. Affordable, effective, and quality-assured — exactly what we need. Their team is professional, responsive, and truly committed to healthcare excellence.',
    name: 'Dr. Meena Shah',
    designation: 'Medical Director',
    company: 'Wellness Clinic, Gandhinagar',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'As a distributor, I have seen many pharmaceutical companies but Shivarun stands out for their transparency, ethical business practices, and the quality of their nutraceutical products. A reliable partner for long-term growth.',
    name: 'Suresh Kumar',
    designation: 'Regional Distributor',
    company: 'MedSupply Gujarat',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5500, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#CC1414] font-semibold text-sm tracking-widest uppercase mb-3">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-balance">
            What Our Partners Say
          </h2>
          <div className="mt-4 w-16 h-1 bg-[#CC1414] mx-auto rounded-full" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((t) => (
                <div key={t.id} className="flex-[0_0_100%] px-4 md:px-16">
                  <div className="bg-[#F8F7F5] rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    {/* Background quote */}
                    <Quote className="absolute top-6 right-8 w-20 h-20 text-[#CC1414]/10" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#CC1414] text-[#CC1414]" />
                      ))}
                    </div>

                    {/* Quote text */}
                    <p className="text-lg md:text-xl text-foreground leading-relaxed italic mb-8 max-w-3xl">
                      &quot;{t.quote}&quot;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#CC1414] flex items-center justify-center font-heading font-bold text-white text-lg">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-foreground">{t.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t.designation} &mdash; {t.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full border border-border bg-white flex items-center justify-center hover:bg-[#CC1414] hover:border-[#CC1414] hover:text-white text-foreground transition-all duration-300 shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === i ? 'w-8 bg-[#CC1414]' : 'w-2 bg-border hover:bg-muted-foreground'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full border border-border bg-white flex items-center justify-center hover:bg-[#CC1414] hover:border-[#CC1414] hover:text-white text-foreground transition-all duration-300 shadow-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
