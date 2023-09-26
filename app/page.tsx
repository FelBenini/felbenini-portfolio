import AnimationWrapper from '@/components/AnimationWrapper';
import AboutSection from './HomeComponents/AboutSection'
import HeroSection from './HomeComponents/HeroSection'
import LatestPosts from './HomeComponents/LatestPosts';
import SkillsSection from './HomeComponents/SkillsSection'
import ProjectsScroll from './HomeComponents/ProjectsScroll';
import ContactForm from '@/components/ContactForm';

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
    <AnimationWrapper>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <h2 style={{textAlign: 'center', marginTop: '6rem', marginBottom: '1.4rem'}}>My Projects</h2>
        <ProjectsScroll />
        <LatestPosts posts={posts} />
        <ContactForm />
      </main>
    </AnimationWrapper>
  )
}
