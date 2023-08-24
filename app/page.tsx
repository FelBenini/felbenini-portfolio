import Image from 'next/image'
import styles from './page.module.scss'
import HeroSection from './HomeComponents/HeroSection'
import Card from '@/components/3dCard'

export default function Home() {
  return (
    <main className={styles.Main}>
      <HeroSection />
      <Card id='frontend-skills'>
        <div style={{width: 300, height: 150}}>Something</div>
      </Card>
    </main>
  )
}
