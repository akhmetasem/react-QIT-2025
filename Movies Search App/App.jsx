import { useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import "./style.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=17dec6d0&s=${query}`
      );
      if (response.data.Response === "False") {
        setMovies([]);
      } else {
        setMovies(response.data.Search);
      }
    } catch (err) {
      setError("Қате орын алды: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Фильмдерді іздеу</h1>
      <form onSubmit={searchMovies}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Фильм атауын енгізіңіз..."
        />
        <button type="submit">Іздеу</button>
      </form>
      {isLoading && <p>Жүктелуде...</p>}
      {error && <p className="error">{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
