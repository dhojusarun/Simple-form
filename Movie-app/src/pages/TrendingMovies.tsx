import { useEffect, useState, useRef } from "react";
import "../CSS/Home.css";

function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const carouselRef = useRef(null);

  const BEARER_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODIyMzQxOWJmODFmYzYyMzc1MDgyMmI3Y2M4NDI1ZCIsIm5iZiI6MTc3MDAxNDMwMy40OTMsInN1YiI6IjY5ODA0NjVmZTc2YzA2OTk5MWJlNWI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hTMc8_A_-VPKW6qp-3Ena63ZZUXOq75eRCNIhejf9Jk";

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/movie/day", {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <div className="home">
      <div className="carousel-wrapper">
        <div className="carousel-header">
          <h1>Trending Movies</h1>
        </div>
        <div className="carousel" ref={carouselRef}>
          <div className="carousel-track">
            {movies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
                <p>
                  Release Date:{movie.release_date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingMovies;
