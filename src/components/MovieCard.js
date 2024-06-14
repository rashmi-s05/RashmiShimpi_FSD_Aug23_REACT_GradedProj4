// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, addToFavorites, removeFromFavorites, isFavorite }) => {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.posterurl} alt={movie.title} />
      </Link>
      <h3>{movie.title}</h3>
      <button className="favorite-button" onClick={handleFavoriteClick}>
        <i className={`fa-heart ${isFavorite ? 'fas' : 'far'}`}></i>
      </button>
    </div>
  );
};

export default MovieCard;
