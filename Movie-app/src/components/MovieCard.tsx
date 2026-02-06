import { useNavigate } from 'react-router-dom';

function MovieCard({ id, title, poster_path, release_date }) {
    const navigate = useNavigate();

    return (
        <div
            className="movie-card"
            onClick={() => navigate(`/movie/${id}`)}
            style={{ cursor: 'pointer' }}
        >
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
