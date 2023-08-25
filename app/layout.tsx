import './globals.scss'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import LoadingBar from '@/components/LoadingBar'

export const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Felipe Benini Web Developer',
  description: 'Full-Stack Web Developer based on Brazil with proficiency on many technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <LoadingBar />
        <header>
          <Link href='/'>
            <Image src='/logo.svg' width={47} height={42} alt='Felipe Benini Logo'/>
          </Link>
          <span>
            <Link href='/blog'>Blog</Link>
            <Link href='/about'>About</Link>
          </span>
        </header>
        {children}
      </body>
    </html>
  )
}
