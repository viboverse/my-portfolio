export default function StarWarsMovies({ onFetch }) {
  return (
    <section>
      <button onClick={onFetch}>Fetch Star Wars Movies from an API</button>
    </section>
  );
}
