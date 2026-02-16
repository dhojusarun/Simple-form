import MovieCard from "../components/MovieCard";
import { useGetPopularMoviesQuery } from "../redux/services/tmdbApi";

function PopularMovies() {
  const { data, isLoading, error } = useGetPopularMoviesQuery();
  const movies = data?.results || [];

  return (
    <div className="home">
      <h1>Popular Movies</h1>
      {isLoading ? <p>Loading...</p> : error ? <p>Error loading popular movies.</p> : (
        <div className="popular-movies-container">
          {movies.map((movie: any) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default PopularMovies;
