import { useState } from "react";

export default function MovieItem({ movie }) {
   const [isExpanded, setIsExpanded] = useState(false);

   function toggleDescription() {
      setIsExpanded((prevExpanded) => !prevExpanded);
   }

   const needsExpansion = movie.description.length > 90;
   const previewText = needsExpansion
      ? movie.description.substring(0, 90) + "..."
      : movie.description;

   return (
      <li
         id={movie.id}
         onClick={toggleDescription}
         className="hover:border-camarone-500 cursor-pointer rounded-lg border border-gray-500 bg-neutral-900/50 p-5 leading-relaxed text-gray-200 transition-all duration-300 hover:shadow-md"
      >
         <div className="space-y-3">
            <h2 className="text-center text-2xl leading-tight font-semibold text-green-500">
               {movie.title}
            </h2>
            <p className="text-sm leading-relaxed text-gray-300">
               {isExpanded ? movie.description : previewText}
            </p>

            {needsExpansion && (
               <button className="cursor-pointer text-blue-500 hover:text-blue-800">
                  {isExpanded ? "Read Less" : "Read More"}
               </button>
            )}
         </div>
      </li>
   );
}
