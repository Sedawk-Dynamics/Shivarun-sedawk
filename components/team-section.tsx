'use client'

import { motion, useInView } from 'framer-motion'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const team = [
  {
    name: 'Dipali M. Soni',
    designation: 'Director & Founder',
    role: 'Business Operations',
    email: 'dipali@shivarunpharma.com',
    image: '/images/team-dipali.png',
    bio: 'Visionary founder leading Shivarun Pharmaceuticals with a focus on quality-driven pharmaceutical solutions and building a trusted healthcare brand across India.',
  },
  {
    name: 'Sangita M. Soni',
    designation: 'Director & Co-Founder',
    role: 'Marketing & Strategy',
    email: 'sangita@shivarunpharma.com',
    image: '/images/team-sangita.png',
    bio: 'Co-founder spearheading marketing and strategic partnerships, driving brand growth and expanding Shivarun\'s presence in pharmaceutical and nutraceutical markets.',
  },
]

function TeamCard({ member, index }: { member: (typeof team)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#CC1414]/10 transition-all duration-500 cursor-default"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-[#1E1E1E]/20 to-transparent" />

        {/* Social on hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <a
            href={`mailto:${member.email}`}
            className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#CC1414] transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#CC1414] transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-[#CC1414] transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-[#CC1414] font-semibold text-sm mt-0.5">{member.designation}</p>
          </div>
          <span className="bg-[#CC1414]/10 text-[#CC1414] text-xs font-medium px-3 py-1 rounded-full">
            {member.role}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>

        <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
          <Mail className="w-4 h-4 text-[#CC1414]" />
          <a
            href={`mailto:${member.email}`}
            className="text-xs text-muted-foreground hover:text-[#CC1414] transition-colors"
          >
            {member.email}
          </a>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#CC1414] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
    </motion.div>
  )
}

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="team" className="py-24 bg-[#F8F7F5] overflow-hidden">
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
            Leadership
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-balance">
            Meet Our Team
          </h2>
          <div className="mt-4 w-16 h-1 bg-[#CC1414] mx-auto rounded-full" />
          <p className="mt-6 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Led by passionate professionals committed to transforming healthcare access and quality across India and beyond.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-8">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Message from Founder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 bg-[#1E1E1E] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative quotes */}
          <span className="absolute top-4 left-8 font-heading text-9xl text-white/5 select-none leading-none font-black">"</span>
          <span className="absolute bottom-0 right-8 font-heading text-9xl text-white/5 select-none leading-none font-black">"</span>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto italic font-light mb-6 relative z-10"
          >
            Welcome to SHIVARUN Pharmaceuticals Pvt. Ltd. — A New Era of Trusted Healthcare. We specialize in reliable
            pharmaceutical solutions focused on quality, compliance, and customer satisfaction. We look forward to serving you.
          </motion.p>
          <div className="flex flex-col items-center gap-1">
            <span className="font-heading font-bold text-white text-lg">Dipali M. Soni</span>
            <span className="text-[#CC1414] text-sm font-semibold">Director & Founder, Shivarun Pharmaceuticals</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
