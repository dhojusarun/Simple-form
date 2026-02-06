import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../CSS/UpcomingMovies.css';

function UpcomingMovies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const BEARER_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${BEARER_TOKEN}`
        }
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results.slice(0, 10));
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching upcoming movies:', err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="home">
            <h1>
              <NavLink to="/upcomingmovies">Upcoming Movies</NavLink>
            </h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="upcoming-movies-container">
                    {movies.map(movie => (
                        <div
                            key={movie.id}
                            className="movie-card"
                            onClick={() => navigate(`/movie/${movie.id}`)}
                        >
                            {movie.poster_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            )}
                            <h3>{movie.title}</h3>
                            <p>{movie.release_date}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UpcomingMovies;
