import Header from '@/components/Header'
import HowItWorks from '@/components/HowItWorks'
// import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HowItWorks />
    </main>
  )
}
