'use client'

import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Award, Globe2, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const highlights = [
  { icon: CheckCircle2, text: 'WHO-GMP compliant contract manufacturing' },
  { icon: Award, text: 'Quality-driven branded generics & nutraceuticals' },
  { icon: Globe2, text: 'Expanding across India & global markets' },
  { icon: TrendingUp, text: 'Asset-light, scalable business model' },
]

const values = [
  { title: 'Integrity', desc: 'We operate with transparency, honesty, and unwavering ethical standards.' },
  { title: 'Quality', desc: 'Every product meets stringent WHO-GMP standards for safety and efficacy.' },
  { title: 'Innovation', desc: 'Science-driven product development for better patient outcomes.' },
  { title: 'Accessibility', desc: 'Affordable healthcare solutions for every stage of life.' },
]

function CounterItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <span className="font-heading text-3xl md:text-4xl font-bold text-[#CC1414]">{value}</span>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  )
}

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#CC1414] font-semibold text-sm tracking-widest uppercase mb-3">
            Who We Are
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            About Shivarun Pharmaceuticals
          </h2>
          <div className="mt-4 w-16 h-1 bg-[#CC1414] mx-auto rounded-full" />
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-pharma.png"
                alt="Shivarun Pharmaceuticals laboratory"
                fill
                className="object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-3 shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 bg-[#CC1414] rounded-full animate-pulse" />
                <span className="font-semibold text-sm text-foreground">WHO-GMP Certified</span>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-[#CC1414]/20 -z-10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Shivarun Pharmaceuticals Private Limited</strong> is a quality-driven
              pharmaceutical company focused on branded generics and nutraceuticals. We operate through an asset-light,
              WHO-GMP compliant contract manufacturing model, delivering affordable, reliable healthcare products.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Our mission is to build trust, ensure compliance, and expand access to high-quality medicines across India
              and emerging global markets worldwide. We specialize in marketing, trading, distribution, and sale of
              pharmaceutical, cosmeceutical, and nutraceutical products.
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-5 h-5 text-[#CC1414] flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-[#F8F7F5] rounded-2xl p-8 mb-20"
        >
          <CounterItem value="2026" label="Founded" />
          <CounterItem value="WHO-GMP" label="Compliance" />
          <CounterItem value="PAN India" label="Distribution" />
          <CounterItem value="Trusted" label="Healthcare Brand" />
        </motion.div>

        {/* Values */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10"
          >
            Our Core Values
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group bg-white border border-border rounded-2xl p-6 hover:border-[#CC1414]/50 hover:shadow-xl hover:shadow-[#CC1414]/10 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 bg-[#CC1414]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#CC1414] transition-colors duration-300">
                  <span className="font-heading font-bold text-[#CC1414] text-lg group-hover:text-white transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-foreground text-lg mb-2">{val.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
