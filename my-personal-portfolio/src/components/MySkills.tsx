"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MySkills() {
  const skills = [
    { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
    { name: "Next.js", icon: "/icons/nextdotjs.svg", color: "#000000" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "HTML", icon: "/icons/html5.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
  ];

  const repeatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section className="mt-2">
      <h2 className="p-4 pl-28">My Skills</h2>
      <div className="mb-8 flex h-18 items-center justify-between overflow-hidden rounded-md bg-purple-600/40">
        <motion.div
          className="flex gap-4"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {repeatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-lg px-6 py-3 whitespace-nowrap"
              style={{ backgroundColor: skill.color + "22" }} // light background tint
            >
              <Image src={skill.icon} alt={skill.name} width={32} height={32} />
              <p style={{ color: skill.color, fontWeight: 700 }}>
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
