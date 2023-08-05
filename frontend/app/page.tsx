import Header from '@/components/Header'
import HowItWorks from '@/components/HowItWorks'
import WhyUs from '@/components/WhyUs'
// import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HowItWorks />
      <WhyUs />
    </main>
  )
}
