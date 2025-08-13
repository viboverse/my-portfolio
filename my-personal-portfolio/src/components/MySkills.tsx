"use client";

import { motion } from "framer-motion";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export default function MySkills() {
  const skills = [
    { name: "React", icon: <SiReact color="#61DAFB" size={48} /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000000" size={48} /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={48} /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={48} /> },
    { name: "HTML", icon: <SiHtml5 color="#E34F26" size={48} /> },
    { name: "CSS", icon: <SiCss3 color="#1572B6" size={48} /> },
  ];

  const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="mb-6 text-2xl font-light text-gray-300">
          Technologies I work with
        </h2>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900/30 via-purple-800/30 to-purple-900/30">
        <motion.div
          className="flex items-center py-8"
          animate={{ x: [0, -1200] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {repeatedSkills.map((skill, index) => (
            <div
              key={index}
              className="mx-8 flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-6 py-4 transition-all duration-300 hover:bg-white/10"
            >
              {skill.icon}
              <span className="font-medium whitespace-nowrap text-gray-200">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
