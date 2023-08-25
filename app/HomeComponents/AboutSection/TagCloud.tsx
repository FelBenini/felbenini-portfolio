'use client'
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const CloudTag = () => {
    return (
        <TagCloud
            options={(w: Window & typeof globalThis) => ({
                radius: Math.min(380, w.innerWidth, w.innerHeight) / 2,
                maxSpeed: "normal",
            })}
        >
            {[
                "VSCode",
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
                "ASP.NET"
            ]}
        </TagCloud>
    )
}

export default CloudTag