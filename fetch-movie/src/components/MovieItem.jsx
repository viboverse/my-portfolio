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
    <li id={movie.id}>
      <h2>{movie.title}</h2>
      <p>{isExpanded ? movie.description : previewText}</p>
      {needsExpansion && (
        <button onClick={toggleDescription}>
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </li>
  );
}
