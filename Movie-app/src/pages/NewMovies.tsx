import React, { useEffect, useState, useRef } from "react";
import "../CSS/Home.css";
import "../CSS/NewMovies.css";

function NewMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);

  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODIyMzQxOWJmODFmYzYyMzc1MDgyMmI3Y2M4NDI1ZCIsIm5iZiI6MTc3MDAxNDMwMy40OTMsInN1YiI6IjY5ODA0NjVmZTc2YzA2OTk5MWJlNWI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhCJdLCJ2ZXJzaW9uIjoxfQ.hTMc8_A_-VPKW6qp-3Ena63ZZUXOq75eRCNIhejf9Jk";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing",
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch movies");

        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (loading)
    return <p style={{ textAlign: "center" }}>Loading movies...</p>;
  if (error) return <p style={{ textAlign: "center" }}>Error: {error}</p>;

  return (
    <div className="home">
      <h1>New Movies</h1>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <div className="movies-list" ref={carouselRef}>
            {movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                )}
                <h3>{movie.title}</h3>
                <p>Release Date: {movie.release_date}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default NewMovies;
