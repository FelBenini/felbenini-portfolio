import Link from 'next/link'
import styles from './styles.module.scss'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { BsGithub } from 'react-icons/bs'
import Image from 'next/image'

type Props = {
  name: string,
  demo?: string,
  github: string,
  stack: Array<string>,
  description: string,
  img: string
}

const ProjectCard = (props: Props) => {
  return (
    <div className={styles.projectCard}>
      <h4>{props.name}</h4>
      <div className={styles.image}>
      <Image src={props.img} alt={props.name} fill />
      </div>
      <p>{props.description}</p>
      <h5>Stack</h5>
      <h6>{props.stack.join(', ')}</h6>
      <span>
        <Link href={props.github} target='blank'>
          <BsGithub size='1.2rem' /> GitHub
        </Link>
        {!props.demo ? <></> : 
          <Link href={props.demo} target='blank'>
            <RxOpenInNewWindow size='1.2rem' /> Website
          </Link>}
      </span>
    </div>
  )
}

export default ProjectCard