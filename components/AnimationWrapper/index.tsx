"use client"
import { motion } from 'framer-motion'
import React from 'react'

const AnimationWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {children}
    </motion.div>
  )
}

export default AnimationWrapper