import MovieCard from '../components/MovieCard';
import { useGetTrendingMoviesQuery } from '../redux/services/tmdbApi';

function TrendingMovies() {
    const { data, isLoading, error } = useGetTrendingMoviesQuery();
    const movies = data?.results || [];

    return (
        <div className="home">
            <h1>Trending Movies</h1>

            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error loading trending movies.</p>
            ) : (
                <div className="trending-movies-container">
                    {movies.map((movie: any) => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title || movie.name}
                            poster_path={movie.poster_path}
                            release_date={movie.release_date || movie.first_air_date}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TrendingMovies;
