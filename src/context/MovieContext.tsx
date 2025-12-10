/* eslint-disable react-refresh/only-export-components */
import  { createContext, useContext, useState, useEffect,type ReactNode } from 'react';
import  type { Movie } from '../types';

interface MovieContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const 
MovieProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state from localStorage
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => {
      // Prevent duplicates
      if (prev.find((m) => m.imdbID === movie.imdbID)) return prev;
      return [...prev, movie];
    });
  };

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((movie) => movie.imdbID !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some((movie) => movie.imdbID === id);
  };

  return (
    <MovieContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </MovieContext.Provider>
  );
};

// Custom Hook for easy access
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};