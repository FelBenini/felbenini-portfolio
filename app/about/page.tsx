import styles from './styles.module.scss'
import AgeTime from '../HomeComponents/AboutSection/AgeTime'
import CloudTag from '../HomeComponents/AboutSection/TagCloud'

const About = () => {
  return (
    <main className={styles.aboutPage}>
      <h1>About Me</h1>
      <div>
        <p>Hey there! My name is <strong>Felipe</strong>, a full-stack web developer based on Brazil, and welcome to my little corner of the web! I am <AgeTime /> old. I have experience building projects and solutions with technologies such as JavaScript, TypeScript, Node.JS, PHP, SQL and much more! I am currently looking for my first professional oportunity on development and the tech industry. Whether it's transforming wireframes into intuitive user interfaces or architecting robust backend systems, I take pride in every line of code I write. </p>
        <h2>Full Stack Web Dev</h2>
        <div className={styles.tagCloud}>
          <CloudTag />
        </div>
        <p>My knowledge on web development goes from building beautiful and intuitive user interfaces on the front-end to complex and scalable services on the back-end. Some of the technologies that I've worked with are JavaScript, TypeScript, Node.js, React, Next.js, Vue, Nuxt.js, SQL, NoSQL, Java, C#, ASP.NET, Express.js, Nest.js and much more. Check out below some of my contributions on GitHub with </p>
        <h3>GitHub Contributions</h3>
        <img src="https://ghchart.rshah.org/FelBenini" alt="2016rshah's Github chart" style={{filter: 'invert(95%) hue-rotate(220deg)', margin: '2rem auto', display: 'block', width: '95%'}} />
      </div>
    </main>
  )
}

export default About