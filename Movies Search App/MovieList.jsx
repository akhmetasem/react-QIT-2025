import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p style={{ color: " rgb(105, 9, 9)" }} >Фильмдер табылмады,Фильмдер енгізіңіз</p>
      )}
    </div>
  );
};

export default MovieList;