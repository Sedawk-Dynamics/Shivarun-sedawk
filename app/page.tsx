import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import MissionSection from '@/components/mission-section'
import Navbar from '@/components/navbar'
import ProductsSection from '@/components/products-section'
import TeamSection from '@/components/team-section'
import TestimonialsSection from '@/components/testimonials-section'

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* <HeroSection /> */}
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <MissionSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
