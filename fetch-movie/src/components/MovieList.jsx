import MovieItem from "./MovieItem";

export default function MovieList({ movies }) {
   return (
      <ul className="space-y-4">
         {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
         ))}
      </ul>
   );
}
