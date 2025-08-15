"use client";

import Image from "next/image";
import {
   SiReact,
   SiNextdotjs,
   SiTypescript,
   SiJavascript,
   SiTailwindcss,
   SiHtml5,
   SiCss3,
} from "react-icons/si";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectsPage() {
   const projects = [
      {
         id: 1,
         title: "FetchFlix",
         description:
            "A Netflix-inspired movie discovery app with search functionality and detailed movie information.",
         image: "/projects/fetchflix.png", // Add your project screenshots
         demoUrl: "https://fetchflix-demo.vercel.app",
         githubUrl: "https://github.com/yourusername/fetchflix",
         techStack: [SiReact, SiTypescript, SiTailwindcss],
      },
      {
         id: 2,
         title: "Tic-Tac-Toe",
         description:
            "Classic tic-tac-toe game with smooth animations and score tracking.",
         image: "/projects/tic-tac-toe.png",
         demoUrl: "https://tic-tac-toe-demo.vercel.app",
         githubUrl: "https://github.com/yourusername/tic-tac-toe",
         techStack: [SiJavascript, SiHtml5, SiCss3],
      },
      {
         id: 3,
         title: "Weather App",
         description:
            "Real-time weather application with location-based forecasts and beautiful UI.",
         image: "/projects/weather-app.png",
         demoUrl: "https://weather-app-demo.vercel.app",
         githubUrl: "https://github.com/yourusername/weather-app",
         techStack: [SiReact, SiNextdotjs, SiTailwindcss],
      },
   ];

   return (
      <section className="min-h-screen px-8 py-16">
         <div className="mx-auto max-w-6xl">
            <div className="space-y-12">
               {/* Header */}
               <div className="space-y-4 text-center">
                  <h1 className="text-4xl font-light text-white md:text-5xl">
                     My Projects
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg text-gray-400">
                     Here are some of the projects I've built to sharpen my
                     skills and explore new technologies.
                  </p>
                  <div className="mx-auto h-1 w-24 bg-purple-600"></div>
               </div>

               {/* Projects Grid */}
               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                     <div
                        key={project.id}
                        className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:transform hover:border-gray-700"
                     >
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden">
                           <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                           {/* Overlay Links */}
                           <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <a
                                 href={project.demoUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="rounded-full bg-purple-600 p-3 text-white transition-colors hover:bg-purple-700"
                              >
                                 <FaExternalLinkAlt className="text-lg" />
                              </a>
                              <a
                                 href={project.githubUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="rounded-full bg-gray-800 p-3 text-white transition-colors hover:bg-gray-700"
                              >
                                 <FaGithub className="text-lg" />
                              </a>
                           </div>
                        </div>

                        {/* Project Content */}
                        <div className="space-y-4 p-6">
                           <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-purple-400">
                              {project.title}
                           </h3>

                           <p className="text-sm leading-relaxed text-gray-400">
                              {project.description}
                           </p>

                           {/* Tech Stack */}
                           <div className="flex flex-wrap gap-2">
                              {project.techStack.map((TechIcon, index) => (
                                 <div
                                    key={index}
                                    className="rounded-lg bg-gray-800 p-2 transition-colors hover:bg-gray-700"
                                 >
                                    <TechIcon className="text-lg text-gray-300" />
                                 </div>
                              ))}
                           </div>

                           {/* Action Links */}
                           <div className="flex gap-3 pt-2">
                              <a
                                 href={project.demoUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
                              >
                                 <FaExternalLinkAlt className="text-xs" />
                                 Live Demo
                              </a>
                              <a
                                 href={project.githubUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 transition-all hover:border-gray-500 hover:text-white"
                              >
                                 <FaGithub className="text-xs" />
                                 Code
                              </a>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
