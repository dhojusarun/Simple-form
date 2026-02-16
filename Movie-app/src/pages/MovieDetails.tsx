import * as React from 'react';
const { useCallback } = React;
import { useParams, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addFavorite, removeFavorite } from '../redux/slices/favoritesSlice';
import { useGetMovieDetailsQuery } from '../redux/services/tmdbApi';
import '../CSS/Home.css'; // Reusing Home.css for layout consistency

function MovieDetails() {
    const { id } = useParams();
    const movie_id = id ? parseInt(id) : null;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { data: movie, isLoading, error } = useGetMovieDetailsQuery(id || '');

    const favorites = useAppSelector((state) => state.favorites.favorites);
    const favorite = movie_id ? favorites.some((m) => m.id === movie_id) : false;

    const onFavoriteClick = useCallback(() => {
        if (!movie || !movie_id) return;
        if (favorite) {
            dispatch(removeFavorite(movie_id));
        } else {
            dispatch(addFavorite({
                id: movie_id,
                title: movie.title || movie.name,
                poster_path: movie.poster_path,
                release_date: movie.release_date || movie.first_air_date
            }));
        }
    }, [dispatch, favorite, movie, movie_id]);

    if (isLoading) return <div className="home"><p>Loading...</p></div>;
    if (error || !movie) return <div className="home"><p>Movie or TV show not found.</p></div>;

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
                            <strong>Genres:</strong> {movie.genres.map((g: any) => g.name).join(', ')}
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
