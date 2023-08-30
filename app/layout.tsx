'use client';
import './globals.scss'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import LoadingBar from '@/components/LoadingBar'
import SideMenu from '@/components/SideMenu'
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [openState, setOpenState] = useState(false);

  const handleMenuClick = () => {
    if (openState === false) {
      setOpenState(true)
    } else {
      setOpenState(false)
    }
  }
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <LoadingBar />
        <SideMenu openState={openState} setOpenState={setOpenState} />
        <header>
          <Link href='/'>
            <Image src='/logo.svg' width={47} height={42} alt='Felipe Benini Logo'/>
          </Link>
          <span>
            <Link href='/blog'>Blog</Link>
            <Link href='/about'>About</Link>
            <button>Download CV</button>
          </span>
          <button onClick={handleMenuClick} className='buttonMenu'>
            <HiMenu size='3rem' />
          </button>
        </header>
          {children}
      </body>
    </html>
  )
}
