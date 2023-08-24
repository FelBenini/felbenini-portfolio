import styles from './styles.module.scss'
import { Miriam_Libre } from 'next/font/google'
import TypeWriterEffect from './TypeWriter'
import { BsArrowDown } from 'react-icons/bs'

const miriamLimbre = Miriam_Libre({weight: '700', subsets: ['latin']})

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.div}>
                <AnimatedTitle title={'Felipe Benini'} />
                <h3 className={miriamLimbre.className}>
                    <TypeWriterEffect />
                </h3>
                <span className={styles.span}>
                    <button className={miriamLimbre.className}>Portfolio</button>
                    <button className={miriamLimbre.className}>Blog</button>
                </span>
                <h5><BsArrowDown /> Scroll Down <BsArrowDown /></h5>
            </div>
        </section>
    )
}

function AnimatedTitle({title}: {title: string}) {
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