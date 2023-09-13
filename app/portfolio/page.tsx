import ProjectCard from "@/components/ProjectCard";
import { list_of_projects } from "./projects";
import style from './styles.module.scss';

export const revalidate = 10;

const PortfolioPage = async () => {
  return (
    <main className={style.portfolioPage}>
      <h1>Portfolio</h1>
      {list_of_projects.map((project) => {
        return <ProjectCard key={project.name} name={project.name} description={project.description} github={project.github} demo={project.website} stack={project.stack.split(', ')} img={project.image}/>
      })}
    </main>
  )
}

export default PortfolioPage