'use client';
import './globals.scss'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import LoadingBar from '@/components/LoadingBar'
import SideMenu from '@/components/SideMenu'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <LoadingBar />
        <SideMenu />
        <header>
          <Link href='/'>
            <Image src='/logo.svg' width={47} height={42} alt='Felipe Benini Logo'/>
          </Link>
          <span>
            <Link href='/blog'>Blog</Link>
            <Link href='/about'>About</Link>
            <button>Download CV</button>
          </span>
        </header>
        {children}
      </body>
    </html>
  )
}
