// src/components/MovieCard.jsx
import React from 'react';
import '../CSS/TrendingMovies.css';

function MovieCard({ title, poster_path, release_date }) {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
      />
      <h3>{title}</h3>
      <p>{release_date}</p>
    </div>
  );
}

export default MovieCard;
