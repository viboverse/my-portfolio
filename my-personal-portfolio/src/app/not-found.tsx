import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFoundPage() {
   return (
      <section className="flex min-h-screen px-8 py-16">
         <div className="mx-auto max-w-4xl space-y-8 text-center">
            {/* 404 and text */}
            <div className="space-y-4">
               <h1 className="animate-pulse text-center text-8xl text-purple-600">
                  404
               </h1>
               <h2 className="text-2xl font-medium text-white md:text-3xl">
                  Page Not Found!
               </h2>
               <p className="mx-auto max-w-md text-lg font-medium text-gray-400">
                  Oops! The page you&apos;re looking for doesn&apos;t exist.
               </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 pt-4">
               <Link
                  href="/"
                  className="flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700"
               >
                  <FaHome className="text-sm" />
                  Go Home
               </Link>
            </div>
         </div>
      </section>
   );
}
