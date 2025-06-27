import MovieItem from "./MovieItem";

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
