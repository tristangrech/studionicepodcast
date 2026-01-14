import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import StudioShowcase from '@/components/StudioShowcase'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <StudioShowcase />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
