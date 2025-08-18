import ProjectCard from "@/components/ProjectCard";
import {
   SiReact,
   SiTypescript,
   SiTailwindcss,
   SiJavascript,
   SiHtml5,
   SiCss3,
   SiVercel,
   SiVite,
   SiNextdotjs,
} from "react-icons/si";

export default function ProjectsPage() {
   const projects = [
      {
         id: 1,
         title: "FetchFlix",
         description:
            "React app integrating SWAPI and Firebase to search, save, and manage movies. Features a clean interface with responsive design.",
         image: "/projects/fetchflix.png",
         demoUrl: "https://fetch-movie-app.vercel.app/",
         githubUrl:
            "https://github.com/viboverse/my-portfolio/tree/main/fetch-movie",
         techStack: [SiReact, SiTailwindcss, SiCss3, SiJavascript],
      },
      {
         id: 2,
         title: "Tic-Tac-Toe",
         description:
            "A modern, responsive Tic Tac Toe game with a clean UI and an unbeatable AI opponent. Play against a friend or challenge the AI for a strategic battle you can't win.",
         image: "/projects/tic-tac-toe.png",
         demoUrl: "https://tic-tac-toe-bay-mu-94.vercel.app/",
         githubUrl:
            "https://github.com/viboverse/my-portfolio/tree/main/tic-tac-toe-game-app",
         techStack: [SiReact, SiTypescript, SiHtml5, SiCss3, SiVite, SiVercel],
      },
      {
         id: 3,
         title: "Weather App",
         description:
            "Real-time weather forecasts with a responsive UI and animations. Features location-based weather data, beautiful animations, and intuitive user experience.",
         image: "/projects/weather-app.png",
         demoUrl: "https://react-weather-app-indol-five.vercel.app/",
         githubUrl:
            "https://github.com/viboverse/my-portfolio/tree/main/react-weather-app",
         techStack: [SiReact, SiVite, SiVercel, SiTailwindcss, SiJavascript],
      },
      {
         id: 4,
         title: "Project Manager",
         description:
            "Task & project management app with authentication and state management. Features project organization, task tracking, and user authentication for seamless workflow management.",
         image: "/projects/project-manager-app.png",
         demoUrl: "https://project-manager-app-nine.vercel.app/",
         githubUrl:
            "https://github.com/viboverse/my-portfolio/tree/main/project-manager-app",
         techStack: [SiReact, SiCss3, SiHtml5, SiVite, SiVercel, SiJavascript],
      },
      {
         id: 5,
         title: "Personal Portfolio",
         description:
            "Modern portfolio website built with Next.js and TypeScript. Showcases my projects, skills, and contact information with responsive design and smooth animations.",
         image: "/projects/personal-portfolio.png",
         demoUrl: "https://project-manager-app-nine.vercel.app/", // Update with your actual portfolio URL
         githubUrl:
            "https://github.com/viboverse/my-portfolio/tree/main/my-personal-portfolio", // Update with actual portfolio repo
         techStack: [
            SiReact,
            SiNextdotjs,
            SiTypescript,
            SiTailwindcss,
            SiVercel,
         ],
      },
   ];
   return (
      <section className="min-h-screen px-8 py-16">
         <div className="mx-auto max-w-6xl">
            <div className="space-y-12">
               {/* Header  */}
               <div className="space-y-4 text-center">
                  <h1 className="text-4xl md:text-5xl">My Projects</h1>
                  <p className="mx-auto max-w-2xl text-lg text-gray-400">
                     Here are some of the projects I&apos;ve built to sharpen my
                     skills and explore new technologies.
                  </p>
                  <div className="mx-auto h-1 w-24 bg-purple-500"></div>
               </div>

               {/* Grid Content */}
               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                     <ProjectCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        demoUrl={project.demoUrl}
                        techStack={project.techStack}
                        githubUrl={project.githubUrl}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
