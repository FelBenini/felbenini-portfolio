import Image from 'next/image'
import styles from './page.module.scss'
import HeroSection from './HomeComponents/HeroSection'
import SkillsSection from './HomeComponents/SkillsSection'

export default function Home() {
  return (
    <main className={styles.Main}>
      <HeroSection />
      <SkillsSection />
    </main>
  )
}
