import { useState } from "react";

export default function AddMovie({ onAddMovie, isLoading }) {
   const [userInput, setUserInput] = useState({
      title: "",
      reason: "",
   });
   const [formError, setFormError] = useState("");

   function handleInputChange(identifier, value) {
      setUserInput((prevValues) => ({
         ...prevValues,
         [identifier]: value,
      }));
   }

   function handleSubmit(e) {
      e.preventDefault();

      if (userInput.title.trim() === "" || userInput.reason.trim() === "") {
         setFormError("All fields are required.");
         return;
      }

      onAddMovie(userInput);

      setFormError("");
      setUserInput({
         title: "",
         reason: "",
      });
   }

   return (
      <section className="mx-auto max-w-md rounded-lg bg-neutral-200 p-6">
         <h2 className="mb-6 text-center text-2xl text-gray-900">
            Add Your Favorite Movie
         </h2>

         <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
               <label
                  htmlFor="movie-title"
                  className="block text-sm font-medium text-gray-700"
               >
                  Movie Title
               </label>
               <input
                  id="movie-title"
                  type="text"
                  placeholder="Enter movie title..."
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  value={userInput.title}
                  className="w-full rounded-lg border border-blue-400 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
               />
            </div>

            <div className="space-y-2">
               <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-700"
               >
                  Why You chose the movie?
               </label>
               <textarea
                  id="reason"
                  type="text"
                  rows="4"
                  placeholder="Share what makes this movie special to you..."
                  onChange={(e) => handleInputChange("reason", e.target.value)}
                  value={userInput.reason}
                  className="w-full resize-none rounded-lg border border-blue-400 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
               />
            </div>

            {formError && (
               <div className="rounded-lg border border-red-200 bg-red-50 p-3">
                  <p className="text-sm font-medium text-red-600">
                     {formError}
                  </p>
               </div>
            )}

            <button
               type="submit"
               disabled={isLoading}
               className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors duration-200 outline-none hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
               {isLoading ? (
                  <span className="flex items-center justify-center">
                     Submitting...
                  </span>
               ) : (
                  "Add Movie"
               )}
            </button>
         </form>
      </section>
   );
}
