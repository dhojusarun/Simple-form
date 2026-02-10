import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useFavorites } from '../context/FavoritesContext';
import '../CSS/Home.css'; // Reusing Home.css for layout consistency

function MovieDetails() {
    const { id } = useParams();
    const movie_id = id ? parseInt(id) : null;
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const BEARER_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

    const favorite = movie_id ? isFavorite(movie_id) : false;

    const onFavoriteClick = () => {
        if (!movie || !movie_id) return;
        if (favorite) {
            removeFavorite(movie_id);
        } else {
            addFavorite({
                id: movie_id,
                title: movie.title || movie.name,
                poster_path: movie.poster_path,
                release_date: movie.release_date || movie.first_air_date
            });
        }
    };

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${BEARER_TOKEN}`
        }
    };

    useEffect(() => {
        if (!id) return;
        setLoading(true);

        const fetchDetails = async () => {
            try {
                // Try fetching as a movie first
                let res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
                let data = await res.json();

                if (data.success === false || res.status === 404) {
                    // If movie fails, try fetching as a TV show
                    res = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options);
                    data = await res.json();
                }

                if (data.success === false || res.status === 404) {
                    setMovie(null);
                } else {
                    setMovie(data);
                }
            } catch (err) {
                console.error('Error fetching details:', err);
                setMovie(null);
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [id]);

    if (loading) return <div className="home"><p>Loading...</p></div>;
    if (!movie) return <div className="home"><p>Movie or TV show not found.</p></div>;

    const title = movie.title || movie.name;
    const releaseDate = movie.release_date || movie.first_air_date;

    return (
        <div className="home" style={{ padding: '20px', color: 'white' }}>
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                {movie.poster_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={title}
                        style={{ borderRadius: '8px', maxWidth: '300px' }}
                    />
                )}
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <h1 style={{ margin: '0' }}>{title}</h1>
                        <div onClick={onFavoriteClick} style={{ cursor: 'pointer' }}>
                            {favorite ? <FaHeart color="red" size={32} /> : <FaRegHeart color="white" size={32} />}
                        </div>
                    </div>
                    {movie.tagline && <p style={{ fontSize: '1.2rem', color: '#999' }}>{movie.tagline}</p>}
                    <div style={{ margin: '20px 0' }}>
                        <strong>Release Date:</strong> {releaseDate || 'N/A'}
                    </div>
                    <div style={{ margin: '20px 0' }}>
                        <strong>Rating:</strong> {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'} / 10
                    </div>
                    <div style={{ margin: '20px 0', lineHeight: '1.6' }}>
                        <strong>Overview:</strong>
                        <p>{movie.overview || 'No overview available.'}</p>
                    </div>
                    {movie.genres && movie.genres.length > 0 && (
                        <div style={{ margin: '20px 0' }}>
                            <strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}
                        </div>
                    )}
                </div>
            </div>
            <button
                onClick={() => navigate(-1)}
                style={{
                    marginTop: '30px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    background: 'var(--primary-color, #e50914)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px'
                }}
            >
                Back
            </button>
        </div>
    );
}

export default MovieDetails;
