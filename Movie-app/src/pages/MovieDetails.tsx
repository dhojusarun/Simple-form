import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MovieDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const BEARER_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => setData(data));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: '40px' }}>
      <h1>{data.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
      />
      <p>{data.overview}</p>
      <p>⭐ {data.vote_average}</p>
    </div>
  );
}

export default MovieDetails;
