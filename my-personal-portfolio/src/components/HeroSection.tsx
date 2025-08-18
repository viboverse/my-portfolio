import Image from "next/image";
import vahab from "./../../public/IMG_0451.jpg";
import { FaDownload } from "react-icons/fa6";
import Link from "next/link";

export default function HeroSection() {
   return (
      <section className="flex min-h-screen items-center justify-between px-8 py-16">
         <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
               <div className="space-y-2">
                  <p className="text-sm tracking-wide text-purple-600 uppercase">
                     Frontend Developer
                  </p>
                  <h1 className="text-4xl font-light text-white md:text-5xl">
                     Vahab Afsharian
                  </h1>
               </div>

               <p className="max-w-md text-lg text-gray-300">
                  I create modern, responsive web experiences with clean code
                  and thoughtful design.
               </p>

               {/* Buttons */}
               <div className="flex gap-4 pt-4">
                  <Link
                     href="/projects"
                     className="cursor-pointer rounded-lg bg-purple-600 px-4 py-3 font-medium text-white transition-colors hover:bg-purple-700"
                  >
                     Browse Projects
                  </Link>
                  <a
                     href="/resume.pdf"
                     download="vahab_afsharian_resume.pdf"
                     className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-medium text-gray-300 transition-all hover:border-gray-500 hover:text-white"
                  >
                     Download CV
                     <FaDownload className="text-sm" />
                  </a>
               </div>
            </div>
            <div className="flex justify-center md:justify-end">
               <Image
                  src={vahab}
                  width={320}
                  height={320}
                  alt="Vahab Afsharian"
                  className="rounded-2xl shadow-2xl"
               />
            </div>
         </div>
      </section>
   );
}
