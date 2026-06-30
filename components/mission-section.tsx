'use client'

import { motion, useInView } from 'framer-motion'
import { Target, Eye, Zap } from 'lucide-react'
import { useRef } from 'react'

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To develop differentiated pharmaceutical and nutraceutical brands through WHO and GMP-certified partnerships, strict quality and regulatory compliance, ethical marketing, and efficient distribution — ensuring accessible and reliable healthcare solutions.',
    accent: 'Mission',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To become a trusted global healthcare brand that empowers better living through science-driven, safe, and effective innovations — ensuring health, strength, and wellness for every stage of life.',
    accent: 'Vision',
  },
  {
    icon: Zap,
    title: 'Our Approach',
    description:
      'Asset-light, WHO-GMP compliant contract manufacturing model combined with ethical marketing practices and a patient-first philosophy to drive sustainable growth across India and emerging global markets.',
    accent: 'Approach',
  },
]

const whyChooseUs = [
  { stat: 'Quality', desc: 'Every product meets international quality and safety standards' },
  { stat: 'Trust', desc: 'Built on ethical business practices and transparent partnerships' },
  { stat: 'Access', desc: 'Affordable healthcare products for widespread patient access' },
  { stat: 'Growth', desc: 'Continuously expanding portfolio through strategic partnerships' },
  { stat: 'Compliance', desc: 'WHO-GMP certified manufacturing with strict QC' },
  { stat: 'Innovation', desc: 'Science-backed formulations for better health outcomes' },
]

export default function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const whyRef = useRef(null)
  const whyInView = useInView(whyRef, { once: true, margin: '-80px' })

  return (
    <section id="mission" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#CC1414] font-semibold text-sm tracking-widest uppercase mb-3">
            Our Purpose
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-balance">
            Mission, Vision & Approach
          </h2>
          <div className="mt-4 w-16 h-1 bg-[#CC1414] mx-auto rounded-full" />
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative bg-[#F8F7F5] rounded-2xl p-8 hover:bg-[#1E1E1E] transition-all duration-500 cursor-default overflow-hidden"
            >
              {/* Background number */}
              <span className="absolute right-4 top-4 font-heading text-8xl font-black text-foreground/5 group-hover:text-white/5 transition-colors select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 bg-[#CC1414]/10 group-hover:bg-[#CC1414] rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500">
                <pillar.icon className="w-7 h-7 text-[#CC1414] group-hover:text-white transition-colors duration-500" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-white mb-4 transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed transition-colors duration-300">
                {pillar.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#CC1414] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          ref={whyRef}
          initial={{ opacity: 0, y: 30 }}
          animate={whyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-[#1E1E1E] rounded-3xl overflow-hidden"
        >
          <div className="px-8 md:px-16 py-12">
            <div className="text-center mb-12">
              <span className="inline-block text-[#CC1414] font-semibold text-sm tracking-widest uppercase mb-3">
                Why Partner With Us
              </span>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-white">
                Why Choose Shivarun?
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={whyInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  className="group flex gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#CC1414]/50 transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#CC1414]/20 group-hover:bg-[#CC1414] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <span className="font-heading text-xs font-bold text-[#CC1414] group-hover:text-white transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base mb-1">{item.stat}</h4>
                    <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
