type Project = {
  name: string,
  description: string,
  stack: string,
  github: string,
  website?: string,
  image: string
}

export const list_of_projects: Array<Project> = [
  {
    name: "tortaCMS",
    description: "tortaCMS is an open-source project designed to give developers flexible tools with a powerful content management solution",
    stack: "Node.js, TypeScript, React, Next.js, Full Stack, PrismaORM, SASS",
    github: "https://github.com/FelBenini/torta-cms",
    website: "https://torta-cms.vercel.app",
    image: "/projectsImages/torta-cms.png"
  },
  {
    name: "cryptoTracker",
    description: "A crypto currency tracker that displays data of hundred of cryptos built with React, React-router, Material-UI and Coingecko's API",
    stack: "Node.js, JavaScript, React, SASS, Material UI, Coingecko API",
    github: "https://github.com/FelBenini/crypto_tracker",
    website: "https://crypto-tracker-fb.vercel.app/",
    image: "/projectsImages/crypto-tracker.png"
  },
  {
    name: "Todo App",
    description: "A task management system made with React totally private with all the data being stored on the cookies and local storage",
    stack: "React, SASS, TypeScript, React Cookies, Material UI",
    github: "https://github.com/FelBenini/todo-app",
    website: "https://todo-app-felbenini.vercel.app/",
    image: "/projectsImages/todo-app.png"
  }
]
