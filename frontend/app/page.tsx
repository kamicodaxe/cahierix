import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HowItWorks from '@/components/HowItWorks'
import ProductsPreview from '@/components/ProductsPreview'
import Promotions from '@/components/Promotions'
import Testimonials from '@/components/Testimonials'
import WhyUs from '@/components/WhyUs'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <Promotions />
      <ProductsPreview />
      <CTA />
      <Footer />
    </main>
  )
}
