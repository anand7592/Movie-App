import React, { useState } from "react";
import type { Movie } from "../types";
import { useMovieContext } from "../context/MovieContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface MovieCardProps {
  movie: Movie;
}

// 🟢 Define your placeholder image URL constant outside the component
// In the future, you can replace this URL with a local import like:
// import noImageFound from '../assets/no-image.png';
const PLACEHOLDER_IMAGE =
  "data:image/jpeg;base64,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";

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorited = isFavorite(movie.imdbID);

  // 🟢 1. Initialize state.
  // If OMDB explicitly says "N/A", use placeholder immediately. Otherwise, try the provided URL.
  const [imgSrc, setImgSrc] = useState(() => {
    return movie.Poster === "N/A" ? PLACEHOLDER_IMAGE : movie.Poster;
  });

  const handleToggle = () => {
    if (favorited) {
      removeFromFavorites(movie.imdbID);
    } else {
      addToFavorites(movie);
    }
  };

  // 🟢 2. Handle loading errors (e.g., broken URL)
  // This runs if the browser tries to load 'movie.Poster' but gets a 404 error.
  const handleImageError = () => {
    setImgSrc(PLACEHOLDER_IMAGE);
  };

  return (
    <div
      className="movie-card"
      style={{
        border: "1px solid #444",
        borderRadius: "12px",
        width: "200px",
        overflow: "hidden",
        background: "#222", // Dark theme background
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column", // Ensure vertical stacking
      }}
    >
      {/* Image Container - Forces height even if image is loading */}
      <div style={{ height: "300px", width: "100%", backgroundColor: "#333" }}>
        <img
          src={imgSrc} // Use state variable here
          alt={movie.Title}
          onError={handleImageError} // Attach the error handler
          style={{
            width: "100%",
            height: "100%", // Fill the container height
            objectFit: "cover",
            display: "block", // Removes tiny bottom gap in some browsers
          }}
        />
      </div>

      <div
        style={{
          padding: "15px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1.1rem",
              margin: "0 0 10px 0",
              color: "white",
              lineHeight: "1.3",
            }}
          >
            {movie.Title}
          </h3>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <span style={{ fontSize: "0.9rem", color: "#bbb" }}>
            {movie.Year}
          </span>

          <button
            onClick={handleToggle}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "1.4rem",
              color: favorited ? "#e74c3c" : "#bbb", // Red if favorite, gray if not
              display: "flex",
              alignItems: "center",
              transition: "color 0.2s ease",
            }}
          >
            {favorited ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
