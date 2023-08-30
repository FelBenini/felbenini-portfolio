import AboutSection from './HomeComponents/AboutSection'
import HeroSection from './HomeComponents/HeroSection'
import LatestPosts from './HomeComponents/LatestPosts';
import SkillsSection from './HomeComponents/SkillsSection'

export const revalidate = 10;

export const metadata = {
  title: 'Felipe Benini Web Developer',
  description: 'Full-Stack Web Developer based on Brazil with proficiency on many technologies',
}

async function loadPosts() {
  const data = await fetch(`${process.env.TORTACMS_HOST}/api/posts?category=blog&limit=3`)
  const res = await data.json();
  return res.posts;
}

export default async function Home() {
  const posts = await loadPosts();
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <LatestPosts posts={posts} />
    </main>
  )
}
