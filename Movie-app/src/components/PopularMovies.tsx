// src/components/TrendingMovies.jsx
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import '../CSS/PopularMovies.css';
import { NavLink } from 'react-router-dom';

function PopularMovies() {
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
                setMovies(data.results.slice(0,10));
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching trending movies:', err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="home">
            <h1><NavLink to = "/popularmovies">Popular Movies</NavLink></h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="popular-movies-container">
                    {movies.map(movie => (
                        <MovieCard
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

export default PopularMovies;
