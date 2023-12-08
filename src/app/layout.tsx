import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ayden Wyer',
  description: 'Welcome to my personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + "h-full bg-neutral-900 text-neutral-300 font-regular"}>
        <main className='flex h-[100vh] w-[100vw]'>
          <Navbar />
          <section className="bg-gradient-to-br from-[#2d2d2d] to-[#171717] grow overflow-y-auto flex justify-center py-32">
            {children}
          </section>
        </main> 
      </body>
    </html>
  )
}
