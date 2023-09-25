'use client';
import './globals.scss'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import LoadingBar from '@/components/LoadingBar'
import SideMenu from '@/components/SideMenu'
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi'
import { AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';

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
    <AnimatePresence>
      <html lang="en">
        <body className={montserrat.className}>
          <LoadingBar />
          <SideMenu openState={openState} setOpenState={setOpenState} />
          <header>
            <Link id="headerLogo" href='/'>
              <Image src='/logo.svg' fill={true} alt='Felipe Benini Logo' />
            </Link>
            <span>
              <Link href='/blog'>Blog</Link>
              <Link href='/about'>About</Link>
              <a className='downloadButton' role='button' href='/Currículo.docx' download>Download CV</a>
            </span>
            <button onClick={handleMenuClick} className='buttonMenu'>
              <HiMenu size='3rem' />
            </button>
          </header>
          {children}
          <Footer />
        </body>
      </html>
    </AnimatePresence>
  )
}
