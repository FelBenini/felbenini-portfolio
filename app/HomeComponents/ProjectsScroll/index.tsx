import { list_of_projects } from '@/app/portfolio/projects';
import styles from './styles.module.scss';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

const ProjectsScroll = () => {
  return (
    <div className={styles.projectsScroll}>
      <div className={styles.bg}></div>
      <div className={styles.slider}>
        <div className={styles.content}>
          {list_of_projects.map((project) => {
            return <ProjectCard key={project.name} name={project.name} img={project.image} github={project.github} description={project.description} demo={project.website} stack={project.stack.split(', ')}/>
          })}
          {list_of_projects.map((project) => {
            return <ProjectCard key={project.name + '2'} name={project.name} img={project.image} github={project.github} description={project.description} demo={project.website} stack={project.stack.split(', ')}/>
          })}
        </div>
      </div>
      <Link href="/portfolio" className={styles.linkPortfolio}>
        All Projects
      </Link>
    </div>
  )
}

export default ProjectsScroll
