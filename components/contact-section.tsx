'use client'

import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useRef, useState } from 'react'

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 88490 85784',
    sub: '+91 96384 97966',
    href: 'tel:+918849085784',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@shivarunpharma.com',
    sub: '',
    href: 'mailto:info@shivarunpharma.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Bansari Elegan, Shop No. 2',
    sub: 'Nr. Kamalam BJP Office, Koba, Gandhinagar - 382007',
    href: 'https://maps.google.com/?q=Koba,Gandhinagar,Gujarat',
  },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-[#1E1E1E] overflow-hidden">
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
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white text-balance">
            Contact Us
          </h2>
          <div className="mt-4 w-16 h-1 bg-[#CC1414] mx-auto rounded-full" />
          <p className="mt-6 text-base text-white/60 max-w-xl mx-auto leading-relaxed">
            Ready to partner with us or want to learn more about our pharmaceutical solutions? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-8">
              Reach Out to Shivarun
            </h3>

            <div className="space-y-5">
              {contactDetails.map((detail, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#CC1414]/40 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#CC1414]/20 group-hover:bg-[#CC1414] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <detail.icon className="w-5 h-5 text-[#CC1414] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{detail.label}</p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-[#CC1414] transition-colors text-sm block"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-white text-sm">{detail.value}</p>
                    )}
                    {detail.sub && (
                      <p className="text-xs text-white/50 mt-0.5">{detail.sub}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-8 p-5 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Follow Us</p>
              <p className="text-white/70 text-sm">
                Instagram:{' '}
                <a
                  href="https://instagram.com/shivarunpharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CC1414] hover:text-[#E53535] font-semibold transition-colors"
                >
                  @shivarunpharma
                </a>
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Send a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-green-600" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-foreground mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground text-sm">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                        Full Name <span className="text-[#CC1414]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-[#F8F7F5] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#CC1414]/30 focus:border-[#CC1414] transition-all placeholder:text-muted-foreground/60"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-[#F8F7F5] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#CC1414]/30 focus:border-[#CC1414] transition-all placeholder:text-muted-foreground/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email Address <span className="text-[#CC1414]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-[#F8F7F5] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#CC1414]/30 focus:border-[#CC1414] transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Message <span className="text-[#CC1414]">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirement..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-[#F8F7F5] text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#CC1414]/30 focus:border-[#CC1414] transition-all placeholder:text-muted-foreground/60 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 bg-[#CC1414] hover:bg-[#A00E0E] text-white py-3.5 rounded-xl font-semibold text-sm transition-colors duration-300 shadow-lg shadow-[#CC1414]/30"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
