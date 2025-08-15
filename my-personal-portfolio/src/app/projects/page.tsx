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
            "A Netflix-inspired movie discovery app built with React and styled with Tailwind CSS. Features search functionality and detailed movie information with a responsive design.",
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
            "Modern tic-tac-toe game built with React and TypeScript. Features smooth animations, score tracking, and deployed on Vercel with Vite build tool.",
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
            "Real-time weather application built with React and Vite. Features location-based forecasts, beautiful UI with Tailwind CSS, and deployed on Vercel.",
         image: "/projects/weather-app.png",
         demoUrl: "https://react-weather-app-indol-five.vercel.app/",
         githubUrl:
            "https://github.com/viboverse/my-portfolio/tree/main/react-weather-app",
         techStack: [SiReact, SiVite, SiVercel, SiTailwindcss, SiJavascript],
      },
      {
         id: 4,
         title: "Project Manager App",
         description:
            "Task management application built with React and vanilla CSS. Features project organization, task tracking, and clean HTML structure deployed on Vercel.",
         image: "/projects/project-manager-app.png",
         demoUrl: "https://project-manager-app-nine.vercel.app/",
         githubUrl:
            "https://github.com/viboverse/my-portfolio/tree/main/project-manager-app",
         techStack: [SiReact, SiCss3, SiHtml5, SiVite, SiVercel, SiJavascript],
      },
      {
         id: 5,
         title: "Personal Portfoli",
         description:
            "Task management application built with React and vanilla CSS. Features project organization, task tracking, and clean HTML structure deployed on Vercel.",
         image: "/projects/project-manager-app.png",
         demoUrl: "https://project-manager-app-nine.vercel.app/",
         githubUrl:
            "https://github.com/viboverse/my-portfolio/tree/main/project-manager-app",
         techStack: [
            SiReact,
            SiCss3,
            SiHtml5,
            SiVite,
            SiVercel,
            SiTypescript,
            SiNextdotjs,
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
