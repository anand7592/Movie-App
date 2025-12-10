import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/Moviecard';

const Favorites = () => {
  const { favorites } = useMovieContext();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>My Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet. Go back to Home to add some!</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;