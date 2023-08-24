import styles from './styles.module.scss'
import Card from '@/components/3dCard'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiNuxtdotjs, SiSass } from 'react-icons/si'
import { BiLogoVuejs, BiLogoCss3 } from 'react-icons/bi'
import { AiFillHtml5 } from 'react-icons/ai'

export default function SkillsSection() {
    return (
        <section className={styles.skillsSection}>
            <h2>My Skills</h2>
            <div className={styles.div}>
                <Card id='frontend-skills'>
                    <div className={styles.cardContent}>
                        <h4>Frontend</h4>
                        <p><FaReact /> React.js</p>
                        <p><SiNextdotjs /> Next.js</p>
                        <p><BiLogoVuejs /> Vue.js</p>
                        <p><SiNuxtdotjs /> Nuxt.js</p>
                        <p><AiFillHtml5 /> HTML5</p>
                        <p><BiLogoCss3 /> CSS3</p>
                        <p><SiSass /> SASS</p>
                    </div>
                </Card>
                <Card id='backend-skills'>
                    <div className={styles.cardContent}>
                        <h4>Backend</h4>
                        <p>Node.js</p>
                        <p>Express.js</p>
                        <p>Nest.js</p>
                        <p>SQL</p>
                        <p>MySQL</p>
                        <p>PostgreSQL</p>
                        <p>MongoDB</p>
                        <p>PHP</p>
                    </div>
                </Card>
                <Card id='development-skills'>
                    <div className={styles.cardContent}>
                        <h4>Development</h4>
                        <p>Git</p>
                        <p>GitHub</p>
                        <p>GitHub Actions</p>
                        <p>Linux</p>
                        <p>OOP</p>
                        <p>AWS</p>
                    </div>
                </Card>
            </div>
        </section>
    )
}