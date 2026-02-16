import { useCallback, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addFavorite, removeFavorite } from '../redux/slices/favoritesSlice';

function MovieCard({ id, title, poster_path, release_date }: any) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state.favorites.favorites);
    const favorite = favorites.some((m) => m.id === id);

    const onFavoriteClick = useCallback((e: MouseEvent) => {
        e.stopPropagation();
        if (favorite) {
            dispatch(removeFavorite(id));
        } else {
            dispatch(addFavorite({ id, title, poster_path, release_date }));
        }
    }, [dispatch, favorite, id, title, poster_path, release_date]);

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
