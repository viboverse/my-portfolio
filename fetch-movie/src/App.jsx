import { useState, useCallback } from "react";
import "./App.css";

import Header from "./components/Header";
import StarWarsMoviesButton from "./components/StarWarsMovies";
import AddMovie from "./components/AddMovie";
import UserMoviesButton from "./components/UserMovies";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

function App() {
   const [movies, setMovies] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const FIREBASE_URL =
      "https://resume-projects-a576d-default-rtdb.firebaseio.com/movies.json";

   // Star Wars API fetch
   const handleFetchStarWarsMovies = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
         const response = await fetch("https://swapi.info/api/films");
         if (!response.ok) {
            throw new Error("Failed to fetch Star Wars movies.");
         }
         const data = await response.json();
         const transformedMovies = data.map((movie) => ({
            id: movie.episode_id,
            title: movie.title,
            description: movie.opening_crawl,
         }));
         setMovies(transformedMovies);
      } catch (err) {
         setError(err.message);
      }
      setIsLoading(false);
   }, []);

   // Logic for fetching data from firebase
   const handleFetchFavoriteMovies = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
         const response = await fetch(FIREBASE_URL);
         if (!response.ok) {
            throw new Error("Failed to fetch favorite movies.");
         }
         const data = await response.json();
         const loadedMovies = [];
         for (const key in data) {
            loadedMovies.push({
               id: key,
               title: data[key].title,
               description: data[key].reason,
            });
         }
         setMovies(loadedMovies);
      } catch (err) {
         setError(err.message);
      }
      setIsLoading(false);
   }, []);

   // Logic for adding a new movie
   const handleAddMovie = useCallback(async (movieData) => {
      setIsLoading(true);
      setError(null);
      try {
         const response = await fetch(FIREBASE_URL, {
            method: "POST",
            body: JSON.stringify(movieData),
            headers: { "Content-Type": "application/json" },
         });
         if (!response.ok) {
            throw new Error("Failed to add movie.");
         }
      } catch (err) {
         setError(err.message);
      }
      setIsLoading(false);
   }, []);

   let content = (
      <div className="flex h-64 items-center justify-center">
         <div className="w-full max-w-sm rounded-xl border border-gray-100 bg-white px-6 py-8 text-center shadow-sm">
            <p className="mb-1 text-lg font-semibold text-gray-900">
               No movies found
            </p>
            <p className="text-sm text-gray-500">
               Fetch movies or add your favorites to get started.
            </p>
         </div>
      </div>
   );

   if (movies.length > 0) {
      content = <MovieList movies={movies} />;
   }

   if (error) {
      content = <p>{error}</p>;
   }

   if (isLoading) {
      content = (
         <p className="text-center text-2xl text-green-500 transition-all">
            Loading...
         </p>
      );
   }

   return (
      <main className="min-h-screen bg-gradient-to-br from-neutral-500 to-neutral-700">
         <Header />
         <div className="mx-auto grid max-w-7xl space-y-4 px-24 py-12 md:grid-cols-2">
            {/* Left panel */}
            <div className="space-y-6">
               <div className="mx-auto max-w-md rounded-lg bg-neutral-200 p-6 shadow-md">
                  <h2 className="py-2 text-center text-lg font-semibold text-gray-900">
                     Movies Source
                  </h2>
                  <div className="space-y-4">
                     <StarWarsMoviesButton
                        onFetch={handleFetchStarWarsMovies}
                     />
                     <UserMoviesButton onFetch={handleFetchFavoriteMovies} />
                  </div>
               </div>

               <AddMovie
                  onAddMovie={handleAddMovie}
                  isLoading={isLoading}
                  error={error}
               />
            </div>

            {/* Right panel */}
            <div className="right-panel">{content}</div>
         </div>

         <Footer />
      </main>
   );
}

export default App;
