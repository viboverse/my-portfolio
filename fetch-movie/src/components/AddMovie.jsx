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
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movie-title">Add Your Favorite Movie</label>
        <input
          id="movie-title"
          type="text"
          onChange={(e) => handleInputChange("title", e.target.value)}
          value={userInput.title}
        />

        <label htmlFor="reason">Why You chose the movie?</label>
        <textarea
          id="reason"
          type="text"
          rows="4"
          onChange={(e) => handleInputChange("reason", e.target.value)}
          value={userInput.reason}
        />

        {formError && <p className="error-text">{formError}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
}
