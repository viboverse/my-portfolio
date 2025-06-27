export default function UserMovies({ onFetch }) {
  return (
    <section>
      <button onClick={onFetch}>Fetch Your Favorite Movies</button>
    </section>
  );
}
