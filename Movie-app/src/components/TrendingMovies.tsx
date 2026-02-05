// src/components/TrendingMovies.jsx
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import '../CSS/TrendingMovies.css';

function TrendingMovies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const BEARER_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${BEARER_TOKEN}`
        }
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
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

    // Split movies into two rows
    const half = Math.ceil(movies.length / 2);
    const firstRow = movies.slice(0, half);
    return (
        <div className="home">
            <h1>Trending Movies</h1>
            {loading ? <p>Loading...</p> : (
                <>
                    <div className="trending-movies-container">
                        {firstRow.map(movie => (
                            <MovieCard
                                key={movie.id}
                                title={movie.title}
                                poster_path={movie.poster_path}
                                release_date={movie.release_date}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default TrendingMovies;
