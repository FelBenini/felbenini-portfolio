'use client'
import Typewriter from 'typewriter-effect'

export default function TypeWriterEffect() {
  return (
    <Typewriter
      options={{
        strings: ['Web Developer', 'Full Stack Developer', 'Programmer',],
        autoStart: true,
        loop: true,
        delay: 120
      }} 
    />
  )
}
