import * as React from 'react';
const { useEffect, useState } = React;
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import '../CSS/TrendingMovies.css'; // Reusing existing styles for consistent grid

function SearchResults() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const [movies, setMovies] = useState<any[]>([]);
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
        if (!query) return;

        setLoading(true);
        fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`, options)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results || []);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error searching movies:', err);
                setLoading(false);
            });
    }, [query]);

    return (
        <div className="home" style={{ minHeight: '80vh', padding: '20px' }}>
            <h1 style={{ color: 'white', marginBottom: '20px' }}>Search Results for: "{query}"</h1>

            {loading ? (
                <p style={{ color: 'white' }}>Loading...</p>
            ) : movies.length > 0 ? (
                <div className="trending-movies-container">
                    {movies.map(movie => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            poster_path={movie.poster_path}
                            release_date={movie.release_date}
                        />
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h2 style={{ color: '#ff4d4f' }}>the movie is not available currently</h2>
                    <p style={{ color: '#9ca3af' }}>Try searching with different keywords.</p>
                </div>
            )}
        </div>
    );
}

export default SearchResults;
