import Image from "next/image";
import { IconType } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const techColors: Record<string, string> = {
   SiReact: "#61DAFB",
   SiNextdotjs: "#000000",
   SiTypescript: "#3178C6",
   SiJavascript: "#F7DF1E",
   SiHtml5: "#E34F26",
   SiCss3: "#1572B6",
   SiTailwindcss: "#06B6D4",
   SiVite: "#646CFF",
   SiVercel: "#000000",
};

type ProjectCardProp = {
   title: string;
   description: string;
   image: string;
   demoUrl: string;
   githubUrl: string;
   techStack: IconType[];
};

export default function ProjectCard({
   title,
   description,
   image,
   demoUrl,
   githubUrl,
   techStack,
}: ProjectCardProp) {
   return (
      <div className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:transform hover:border-gray-700">
         {/* Image  */}
         <div className="relative h-48 overflow-hidden bg-neutral-400">
            <Image
               src={image}
               alt="Vibo's Project"
               className="object-cover transition-transform duration-300 group-hover:scale-110"
               fill
            />
         </div>

         {/* Project Content */}
         <div className="space-y-4 p-6">
            <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-purple-400">
               {title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
               {description}
            </p>

            {/* Tech Stacks */}
            <div className="flex flex-wrap gap-2">
               {techStack.map((TechIcon, index) => {
                  const iconName = TechIcon.name;
                  const color = techColors[iconName];

                  return (
                     <div
                        key={index}
                        className="rounded-lg bg-gray-800 p-2 transition-colors hover:bg-gray-700"
                     >
                        <TechIcon className="text-lg" style={{ color }} />
                     </div>
                  );
               })}
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
               <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
               >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Demo
               </a>
               <a
                  href={githubUrl}
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
   );
}
