import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Home.css';
import '../CSS/TrendingMovies.css';

function TrendingMovies() {
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
        fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching popular movies:', err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="home">
            <h1>Trending Movies</h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="trending-movies-container">
                    {movies.map(movie => (
                        <div
                            key={movie.id}
                            className="movie-card"
                           onClick={() => navigate(`/${movie.media_type}/${movie.id}`)}

                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                alt={movie.title || movie.name}
                            />
                            <h3>{movie.title || movie.name}</h3>
                            <p>{movie.release_date || movie.first_air_date}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TrendingMovies;
