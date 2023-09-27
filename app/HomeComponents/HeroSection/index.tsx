import styles from './styles.module.scss'
import { Miriam_Libre } from 'next/font/google'
import TypeWriterEffect from './TypeWriter'
import { BsArrowDown, BsGithub } from 'react-icons/bs'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'

const miriamLimbre = Miriam_Libre({ weight: '700', subsets: ['latin'] })

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.div}>
                <p className={miriamLimbre.className}>Hey there, I am</p>
                <AnimatedTitle title={'Felipe Benini'} />
                <h3 className={miriamLimbre.className}>
                    <TypeWriterEffect />
                </h3>
                <span className={styles.span}>
                    <Link href='/portfolio' className={miriamLimbre.className}>
                        Portfolio
                    </Link>
                    <Link href='/blog' className={miriamLimbre.className}>
                        Blog
                    </Link>
                </span>
                <span className={styles.icons}>
                    <Link aria-label='GitHub' href='https://github.com/FelBenini' target='blank'>
                        <BsGithub size='2.2rem' />
                    </Link>
                    <Link aria-label='LinkedIn' href='https://www.linkedin.com/in/felipe-benini-589169293/' target='blank'>
                        <BiLogoLinkedinSquare size='2.6rem' />
                    </Link>
                    <Link aria-label='e-mail' href='mailto:felbenini@gmail.com' target='blank'>
                        <MdEmail size='2.6rem' />
                    </Link>
                </span>
                <h5><BsArrowDown /> Scroll Down <BsArrowDown /></h5>
            </div>
        </section>
    )
}

function AnimatedTitle({ title }: { title: string }) {
    const splittedTitle = title.split('')
    return (
        <h1 className={styles.bigTitle}>
            {splittedTitle.map((l, index) => {
                const style = { "--index": index } as React.CSSProperties
                return (
                    <span className={styles.animated} key={index} style={style}>{l}</span>
                )
            })}
        </h1>
    )
}
