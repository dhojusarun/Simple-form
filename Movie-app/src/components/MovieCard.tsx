import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useFavorites } from '../context/FavoritesContext';

function MovieCard({ id, title, poster_path, release_date }) {
    const navigate = useNavigate();
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const favorite = isFavorite(id);

    const onFavoriteClick = (e) => {
        e.stopPropagation();
        if (favorite) {
            removeFavorite(id);
        } else {
            addFavorite({ id, title, poster_path, release_date });
        }
    };

    return (
        <div
            className="movie-card"
            onClick={() => navigate(`/movie/${id}`)}
            style={{ cursor: 'pointer', position: 'relative' }}
        >
            <div className="favorite-btn" onClick={onFavoriteClick}>
                {favorite ? <FaHeart color="red" size={24} /> : <FaRegHeart color="white" size={24} />}
            </div>
            {poster_path && (
                <img
                    src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                    alt={title}
                />
            )}
            <h3>{title}</h3>
            <p>{release_date}</p>
        </div>
    );
}

export default MovieCard;
