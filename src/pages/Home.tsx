import React, { useEffect, useState } from 'react';
import { getMovies } from '../services/api';
import type { Movie } from '../types';
import MovieCard from '../components/Moviecard';

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("Avengers");
  
  // 🟢 NEW: State for error messages
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMovies(searchTerm);
  }, []); // Trigger on mount

  const fetchMovies = async (term: string) => {
    setLoading(true);
    setError(null); // 1. Reset error before new request
    
    try {
      const data = await getMovies(term);
      
      // 2. Check OMDB's specific response field
      if (data.Response === "True") {
        setMovies(data.Search);
        setError(null); // Clear any old errors
      } else {
        // 3. API worked, but found nothing (e.g., "Movie not found!")
        setMovies([]); // Clear old movies
        setError(data.Error); // Set the error message from Backend
      }

    } catch (err) {
      // 4. Network/Server crashed completely
      console.error(err);
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) fetchMovies(searchTerm);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Search Form */}
      <form onSubmit={handleSearch} style={{ marginBottom: '2rem', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies..."
          style={{ 
            padding: '12px', 
            width: '100%', 
            maxWidth: '400px',
            borderRadius: '8px',
            border: '1px solid #444',
            background: '#222',
            color: 'white',
            fontSize: '1rem'
          }}
        />
        <button 
          type="submit" 
          style={{ 
            padding: '12px 24px', 
            background: '#f5c518', 
            color: 'black', 
            border: 'none', 
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer' 
          }}
        >
          Search
        </button>
      </form>

      {/* 🟢 ERROR MESSAGE DISPLAY */}
      {error && (
        <div style={{ 
          background: '#ffdddd', 
          color: '#d8000c', 
          padding: '15px', 
          borderRadius: '8px',
          marginBottom: '20px',
          borderLeft: '5px solid #d8000c'
        }}>
          <strong>⚠️ Oops!</strong> {error}
        </div>
      )}

      {/* Loading State */}
      {loading && <p style={{ color: '#aaa' }}>Loading movies...</p>}

      {/* Movie Grid */}
      {!loading && !error && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;