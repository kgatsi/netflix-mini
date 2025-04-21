import React, { useState } from 'react';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMovies = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/movies');
      const data = await res.json();
      setMovies(data);
    } catch {
      alert('Failed to load movies.');
    }
    setLoading(false);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>🎬 Netflix Mini (React)</h1>
      <button onClick={loadMovies}>Load Movies</button>
      {loading && <p>Loading...</p>}
      <div>
        {movies.map((movie, i) => (
          <div key={i}>
            <strong>{movie.title}</strong> — {movie.genre}
          </div>
        ))}
      </div>
    </div>
  );
}
