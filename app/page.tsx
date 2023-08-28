import AboutSection from './HomeComponents/AboutSection'
import HeroSection from './HomeComponents/HeroSection'
import LatestPosts from './HomeComponents/LatestPosts';
import SkillsSection from './HomeComponents/SkillsSection'

export const revalidate = 10;

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <LatestPosts />
    </main>
  )
}
