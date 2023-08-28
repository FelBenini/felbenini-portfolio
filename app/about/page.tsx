import styles from './styles.module.scss'
import AgeTime from '../HomeComponents/AboutSection/AgeTime'
import CloudTag from '../HomeComponents/AboutSection/TagCloud'

const About = () => {
  return (
    <main className={styles.aboutPage}>
      <h1>About Me</h1>
      <div>
        <p>Hey there! My name is <strong>Felipe</strong>, a full-stack web developer based on Brazil, and welcome to my little corner of the web! I am <AgeTime /> old. I have experience building projects and solutions with technologies such as JavaScript, TypeScript, Node.JS, PHP, SQL and much more! I am currently looking for my first professional oportunity on development and the tech industry. Whether it's transforming wireframes into intuitive user interfaces or architecting robust backend systems, I take pride in every line of code I write. </p>
        <div className={styles.tagCloud}>
          <CloudTag />
        </div>
      </div>
    </main>
  )
}

export default About