'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: 'WHO-GMP', label: 'Certified Manufacturing' },
  { value: '100+', label: 'Product Portfolio' },
  { value: 'PAN India', label: 'Distribution Network' },
  { value: '10+', label: 'Therapeutic Segments' },
]

export default function HeroSection() {
  return (
    <section id="home" className="w-full mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#2F2F2F] border-y border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center py-8 px-6"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </h3>
                <p className="mt-2 text-sm md:text-base text-gray-400 text-center">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}