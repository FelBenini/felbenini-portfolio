import ProjectCard from "@/components/ProjectCard";
import { list_of_projects } from "./projects";

export const revalidate = 10;

const PortfolioPage = () => {
  return (
    <main>
      {list_of_projects.map((project) => {
        return <ProjectCard key={project.name} name={project.name} description={project.description} github={project.github} demo={project.website} stack={project.stack.split(', ')} img={project.image}/>
      })}
    </main>
  )
}

export default PortfolioPage
