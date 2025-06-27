export default function UserMovies({ onFetch }) {
  return (
    <section>
      <button onClick={onFetch}>Fetch Movies from Firebase</button>
    </section>
  );
}
