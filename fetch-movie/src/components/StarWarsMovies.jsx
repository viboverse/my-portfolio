export default function StarWarsMovies({ onFetch }) {
  return (
    <section>
      <button onClick={onFetch}>Fetch Star Wars Movie From Swapi API</button>
    </section>
  );
}
