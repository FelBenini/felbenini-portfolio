'use client'
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const CloudTag = () => {
    return (
      <TagCloud
        options={(w: Window & typeof globalThis) => ({
          radius: Math.min(380, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "normal",
        })}
        style={{margin: '0 auto'}}
      >
        {[
          "TypeScript",
          "React",
          "JavaScript",
          "PHP",
          "MySQL",
          "SQL",
          "NodeJS",
          "MongoDB",
          "Express",
          "Git",
          "SASS",
          "HTML5",
          "CSS3",
          "NextJS",
          "Vue",
          "NuxtJS",
          "C#",
          "Java",
          "Spring Boot",
          "ASP.NET",
          "NestJS",
          "PostgreSQL",
          "Docker"
        ]}
      </TagCloud>
    )
}

export default CloudTag
