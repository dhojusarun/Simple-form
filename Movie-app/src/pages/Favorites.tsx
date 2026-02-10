import MovieCard from '../components/MovieCard';
import { useFavorites } from '../context/FavoritesContext';
import '../CSS/PopularMovies.css'; // Reusing container styles

function Favorites() {
    const { favorites } = useFavorites();

    return (
        <div className="home" style={{ padding: '20px' }}>
            <h1 style={{ color: 'white', marginBottom: '20px' }}>Your Favorites</h1>
            {favorites.length === 0 ? (
                <p style={{ color: 'white' }}>You haven't added any favorites yet.</p>
            ) : (
                <div
                    className="favorites-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '20px'
                    }}
                >
                    {favorites.map(movie => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
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

export default Favorites;
