import type { Metadata } from 'next'
import Services from './components/ServicesSection'

export const metadata: Metadata = {
  title: 'Ayden Wyer',
  description: 'Welcome to my personal portfolio',
}

export default function Home() {
  return (
    <section className='flex flex-col gap-44'>
      <Services /> 
    </section>
  )
}
