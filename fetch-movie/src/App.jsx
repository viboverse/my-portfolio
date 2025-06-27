import { useState, useCallback } from "react";
import "./App.css";

import Header from "./components/Header";
import StarWarsMovies from "./components/StarWarsMovies";
import AddMovie from "./components/AddMovie";
import UserMovies from "./components/UserMovies";
import MovieList from "./components/MovieList";

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

  let content = <p>No Movies Found.</p>;

  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <div className="layout">
        <div className="left-panel">
          <StarWarsMovies onFetch={handleFetchStarWarsMovies} />
          <AddMovie
            onAddMovie={handleAddMovie}
            isLoading={isLoading}
            error={error}
          />
          <UserMovies onFetch={handleFetchFavoriteMovies} />
        </div>

        <div className="right-panel">{content}</div>
      </div>
    </>
  );
}

export default App;
