import React from 'react'
import styles from './styles.module.scss'
import AgeTime from './AgeTime'

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
        <h2>About me</h2>
        <div>
            <p>Hey there! My name is Felipe, a full-stack/web developer based on Brazil, I am <AgeTime /> old </p>
        </div>
    </section>
  )
}

export default AboutSection