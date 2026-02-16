import MovieCard from '../components/MovieCard';
import { useGetUpcomingMoviesQuery } from '../redux/services/tmdbApi';

function UpcomingMovies() {
    const { data, isLoading, error } = useGetUpcomingMoviesQuery();
    const movies = data?.results || [];

    return (
        <div className="home">
            <h1>Upcoming Movies</h1>

            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error loading upcoming movies.</p>
            ) : (
                <div className="upcoming-movies-container">
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
    );
}

export default UpcomingMovies;
