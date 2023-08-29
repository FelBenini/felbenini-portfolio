import Link from 'next/link'
import styles from './styles.module.scss'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { BsGithub } from 'react-icons/bs'

type Props = {
  name: string,
  demo?: string,
  github: string,
  stack: Array<string>,
  description: string
}

const ProjectCard = (props: Props) => {
  return (
    <div className={styles.projectCard}>
      <h4>{props.name}</h4>
      <span>
        <Link href={props.github} target='blank'>
          <BsGithub size='1.2rem' /> GitHub
        </Link>
        {!props.demo ? <></> : 
          <Link href={props.demo} target='blank'>
            <RxOpenInNewWindow size='1.2rem' /> Website
          </Link>}
      </span>
      <p>{props.description}</p>
    </div>
  )
}

export default ProjectCard