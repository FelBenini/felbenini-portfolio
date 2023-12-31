import styles from './styles.module.scss'
import Card from '@/components/3dCard'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiNuxtdotjs, SiSass, SiTypescript, SiMongodb, SiNestjs, SiGithubactions, SiDocker, SiSpring, SiCsharp, SiDotnet } from 'react-icons/si'
import { BiLogoVuejs, BiLogoCss3 } from 'react-icons/bi'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoNodejs, IoLogoJavascript } from 'react-icons/io'
import { BsFiletypeSql, BsGithub, BsGit } from 'react-icons/bs'
import { MdDataObject } from 'react-icons/md'
import { GrJava } from 'react-icons/gr';
import { Miriam_Libre } from 'next/font/google'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const miriamLimbre = Miriam_Libre({weight: '700', subsets: ['latin']})

export default function SkillsSection() {
  return (
    <section className={styles.skillsSection}>
      <h2>My Skills</h2>
      <div className={`${styles.div} ${miriamLimbre.className}`}>
        <Card id='frontend-skills'>
          <div className={styles.cardContent}>
            <h4 className={montserrat.className} style={{color: '#27e5be'}}>Frontend</h4>
            <p><FaReact /> React.js</p>
            <p><SiNextdotjs /> Next.js</p>
            <p><BiLogoVuejs /> Vue.js</p>
            <p><SiNuxtdotjs /> Nuxt.js</p>
            <p><IoLogoJavascript /> JavaScript</p>
            <p><SiTypescript /> TypeScript</p>
            <p><AiFillHtml5 /> HTML5</p>
            <p><BiLogoCss3 /> CSS3</p>
            <p><SiSass /> SASS</p>
          </div>
          </Card>
          <Card id='backend-skills'>
            <div className={styles.cardContent}>
              <h4 className={montserrat.className} style={{color: '#4592fb'}}>Backend</h4>
              <p><IoLogoNodejs /> Node.js</p>
              <p><SiNestjs /> Nest.js</p>
              <p><BsFiletypeSql /> SQL</p>
              <p><SiMongodb /> MongoDB</p>
              <p><GrJava style={{filter: "invert(1)"}} scale={1.2}/> Java</p>
              <p><SiSpring /> Spring Boot</p>
              <p><SiCsharp /> C#</p>
              <p><SiDotnet /> ASP.NET</p>
            </div>
          </Card>
          <Card id='development-skills'>
            <div className={styles.cardContent}>
              <h4 className={montserrat.className} style={{color: '#f8bf53'}}>Development</h4>
              <p><BsGit /> Git</p>
              <p><BsGithub /> GitHub</p>
              <p><SiGithubactions /> GitHub Actions</p>
              <p><MdDataObject /> OOP</p>
              <p><SiDocker /> Docker</p>
            </div>
          </Card>
      </div>
    </section>
  )
}
