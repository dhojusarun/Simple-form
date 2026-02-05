import "../CSS/PopularMovies1.css";
import { useEffect, useRef, useState } from "react";

function PopularMoviesHome() {
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
        setMovies(data.results.slice(0, 15));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching popular movies:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <h2 className="popular-home-loading">Loading popular movies...</h2>;

  return (
    <section className="popular-home-section">
      <div className="popular-home-header">
        <h1>Popular Movies</h1>
      </div>

      <div className="popular-home-carousel" ref={carouselRef}>
        <div className="popular-home-track">
          {movies.map((movie) => (
            <div className="popular-home-card" key={movie.id}>
              <img
                src={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${movie.poster_path}`
                    : "https://via.placeholder.com/300x450"
                }
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularMoviesHome;
