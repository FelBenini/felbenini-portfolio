import ProjectCard from "@/components/ProjectCard";
import { list_of_projects } from "./projects";
import style from './styles.module.scss';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Portfolio - Felipe Benini'
}

const PortfolioPage = async () => {
  return (
      <main className={style.portfolioPage}>
        <h1>Portfolio</h1>
        <p>Some projects that I&apos;ve built to showcase my skills and proficiency on web development.</p>
        {list_of_projects.map((project) => {
          return <ProjectCard key={project.name} name={project.name} description={project.description} github={project.github} demo={project.website} stack={project.stack.split(', ')} img={project.image}/>
        })}
      </main>
  )
}

export default PortfolioPage
