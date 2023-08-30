import styles from './styles.module.scss'
import AgeTime from '../HomeComponents/AboutSection/AgeTime'
import CloudTag from '../HomeComponents/AboutSection/TagCloud'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: 'Felipe Benini Web Developer',
  description: 'Full-Stack Web Developer based on Brazil with proficiency on many technologies',
}

const About = () => {
  return (
    <main className={styles.aboutPage}>
      <h1>About Me</h1>
      <div>
        <p>Hey there! My name is <strong>Felipe</strong>, a full-stack web developer based on <strong>Brazil</strong>, and welcome to my little corner of the web! I am <AgeTime />. I have experience building projects and <strong>full-stack</strong> solutions with technologies such as JavaScript, TypeScript, Node.JS, PHP, SQL and much more! I am currently looking for my first <strong>professional oportunity</strong> on <strong>web development</strong> and the tech industry. Whether it&apos;s transforming wireframes into intuitive user interfaces or architecting robust backend systems, I take pride in every line of code I write. </p>
        <h2>Full Stack Web Dev</h2>
        <div className={styles.tagCloud}>
          <CloudTag />
        </div>
        <p>My knowledge on web development goes from building beautiful and intuitive user interfaces on the front-end to complex and scalable services on the back-end. Some of the technologies that I&apos;ve worked with are JavaScript, TypeScript, Node.js, React, Next.js, Vue, Nuxt.js, SQL, NoSQL, Java, C#, ASP.NET, Express.js, Nest.js and much more. Check out below some of my contributions on GitHub in the latest days as well as some of my programming projects!</p>
        <h3>GitHub Contributions</h3>
        <img src="https://ghchart.rshah.org/FelBenini" alt="Felbenini's Github chart" style={{filter: 'invert(95%) hue-rotate(220deg)', margin: '2rem auto', display: 'block', width: '95%'}} />
        <h3>Projects That I&apos;ve Built</h3>
        <section className={styles.projects}>
          <ProjectCard name='tortaCMS' stack={['Node.js', 'TypeScript', 'React', 'Next.js', 'Full Stack', 'PrismaORM', 'SASS']} github='https://github.com/FelBenini/torta-cms' demo='https://torta-cms.vercel.app' description='tortaCMS is an open-source project designed to give developers flexible tools with a powerful content management solution' img='/projectsImages/torta-cms.png' />
          <ProjectCard name='cryptoTracker' stack={['Node.js', 'JavaScript', 'React', 'SASS', 'Material UI', 'Coingecko API']} github='https://github.com/FelBenini/crypto_tracker' demo='https://crypto-tracker-fb.vercel.app/' description='A crypto currency tracker that displays data of hundred of cryptos built with React, React-router, Material-UI and Coingecko&apos;s API' img='/projectsImages/crypto-tracker.png' />
          <ProjectCard name='Todo App' demo='https://todo-app-felbenini.vercel.app/' github='https://github.com/FelBenini/todo-app' stack={['React', 'SASS', 'TypeScript', 'React Cookies', 'Material UI']} description='A task management system made with React totally private with all the data being stored on the cookies and local storage' img='/projectsImages/todo-app.png' />
        </section>
      </div>
    </main>
  )
}

export default About