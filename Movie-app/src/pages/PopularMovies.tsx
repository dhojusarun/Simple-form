import { useEffect, useState, useRef } from "react";
import "../CSS/Home.css";
import "../CSS/PopularMovies.css"; // New CSS for carousel

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef(null);

  const BEARER_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODIyMzQxOWJmODFmYzYyMzc1MDgyMmI3Y2M4NDI1ZCIsIm5iZiI6MTc3MDAxNDMwMy40OTMsInN1YiI6IjY5ODA0NjVmZTc2YzA2OTk5MWJlNWI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hTMc8_A_-VPKW6qp-3Ena63ZZUXOq75eRCNIhejf9Jk";

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching popular movies:", err);
        setLoading(false);
      });
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  if (loading) return <h2>Loading popular movies...</h2>;

  return (
    <div className="home">
      <div className="popular-carousel-wrapper">
        <div className="carousel-header">
          <h1>Popular Movies</h1>
          <div className="carousel-buttons">
            <button onClick={scrollLeft}>◀</button>
            <button onClick={scrollRight}>▶</button>
          </div>
        </div>

        <div className="carousel" ref={carouselRef}>
          <div className="carousel-track">
            {movies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <img
                  src={
                    movie.poster_path
                      ? `${IMAGE_BASE_URL}${movie.poster_path}`
                      : "https://via.placeholder.com/300x450"
                  }
                  alt={movie.title}
                />
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

export default PopularMovies;
