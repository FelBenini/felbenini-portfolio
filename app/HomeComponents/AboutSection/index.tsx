import React from 'react'
import styles from './styles.module.scss'
import AgeTime from './AgeTime'
import CloudTag from './TagCloud'

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
        <h2>About me</h2>
        <div className={styles.wrapper}>
            <p className={styles.paragraph}>Hey there! My name is <strong>Felipe</strong>, a full-stack web developer based on Brazil, I am <AgeTime /> old. I have experience building projects and solutions with technologies such as JavaScript, TypeScript, Node.JS, PHP, SQL and etc. I am currently looking for my first professional oportunity on development and the tech industry.</p>
            <CloudTag />
        </div>
    </section>
  )
}

export default AboutSection