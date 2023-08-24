'use client'
import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'

const Card = ({children, id}: {children: React.ReactNode, id: string}) => {
  const [xPos, setXPos] = useState(0)
  const [yPos, setYPos] = useState(0)
  const [transition, setTransition] = useState('all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s')
  const ref = useRef(null)
  const mouseLeave = () => {
    setYPos(0)
    setXPos(0)
    setTransition('all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s')
  }
  const cardAnimation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = e.currentTarget.offsetWidth / 2;
    const height = e.currentTarget.offsetHeight / 2;
    const x = e.clientX - rect.left - height;
    const y = e.clientY - rect.top - height;
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
    setXPos(-x / 25)
    setYPos(y / 15)
  }
  const mouseEnter = () => {
    setTimeout(() => {
      setTransition('none')
    }, 450)
  }
  return (
    <div id={id} ref={ref} style={{transition: transition, transform: `perspective(1000px) rotateX(${yPos}deg) rotateY(${xPos}deg) scale3d(1, 1, 1)`}} onMouseLeave={mouseLeave} onMouseEnter={mouseEnter} onMouseMove={cardAnimation} className={styles.card}>
    <div className={styles.insideCard}>
      {children}
    </div>
  </div>
  )
}

export default Card