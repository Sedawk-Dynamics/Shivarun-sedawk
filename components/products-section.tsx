'use client'

import { motion, useInView } from 'framer-motion'
import { ArrowRight, Pill, Leaf, Factory, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

const products = [
  {
    id: 1,
    icon: Pill,
    title: 'Branded - Generics',
    tagline: 'Affordable Excellence',
    description:
      'Quality, affordable medicines in key therapeutic segments. Our branded generic portfolio covers a wide range of indications ensuring broad patient access.',
    image: '/images/branded-generics.png',
    features: ['Therapeutic-grade quality', 'Regulatory compliant', 'Wide therapeutic range', 'Cost-effective solutions'],
    color: '#CC1414',
  },
  {
    id: 2,
    icon: Leaf,
    title: 'Nutraceuticals & OTC',
    tagline: 'Wellness & Prevention',
    description:
      'Science-backed wellness and preventive healthcare products. Our nutraceutical range supports immunity, vitality, and holistic well-being.',
    image: '/images/nutraceuticals.png',
    features: ['Science-backed formulas', 'Natural ingredients', 'Preventive healthcare', 'OTC availability'],
    color: '#2B7A0B',
  },
  {
    id: 3,
    icon: Factory,
    title: 'WHO-GMP Manufacturing',
    tagline: 'Quality Assured',
    description:
      'Contract-manufactured products with strict quality control under WHO-GMP certified facilities, ensuring every batch meets global pharmaceutical standards.',
    image: '/images/manufacturing.png',
    features: ['WHO-GMP certified', 'Strict QC protocols', 'Contract manufacturing', 'Global standards'],
    color: '#0066CC',
  },
  {
    id: 4,
    icon: TrendingUp,
    title: 'Portfolio Expansion',
    tagline: 'Future Growth',
    description:
      'Third-party and in-licensed brands for future growth. We partner with leading manufacturers to continuously expand our product portfolio.',
    image: '/images/portfolio.png',
    features: ['In-licensing opportunities', 'Third-party brands', 'Strategic partnerships', 'Market expansion'],
    color: '#7C3AED',
  },
]

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 cursor-default"
      whileHover={{ y: -8 }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Icon badge */}
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
        >
          <product.icon className="w-6 h-6 text-white" />
        </motion.div>

        {/* Tagline */}
        <div className="absolute bottom-4 left-4">
          <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">{product.tagline}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-[#CC1414] transition-colors duration-300">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{product.description}</p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {product.features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={hovered ? { opacity: 1 } : { opacity: 0.6 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-1.5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#CC1414] flex-shrink-0" />
              <span className="text-xs text-muted-foreground">{f}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          animate={{ x: hovered ? 4 : 0 }}
          className="flex items-center gap-2 text-[#CC1414] font-semibold text-sm hover:gap-3 transition-all duration-300"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Bottom accent line */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CC1414] origin-left"
      />
    </motion.div>
  )
}

export default function ProductsSection() {
  const headerRef = useRef(null)
  const isInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="products" className="py-24 bg-[#F8F7F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#CC1414] font-semibold text-sm tracking-widest uppercase mb-3">
            What We Offer
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-balance">
            Our Products & Services
          </h2>
          <div className="mt-4 w-16 h-1 bg-[#CC1414] mx-auto rounded-full" />
          <p className="mt-6 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From branded generics to nutraceuticals, we deliver quality healthcare solutions backed by
            WHO-GMP certified manufacturing and rigorous compliance standards.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 border-2 border-[#CC1414] text-[#CC1414] hover:bg-[#CC1414] hover:text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
          >
            Enquire About Our Products
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
