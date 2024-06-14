// src/components/Favorites.js
import React from 'react';
import MovieCard from './MovieCard';

const Favorites = ({ favoriteMovies, removeFromFavorites, addToFavorites }) => {
  return (
    <div className="favorites">
      {favoriteMovies.length > 0 ? (
        favoriteMovies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={true}
            removeFromFavorites={removeFromFavorites}
            addToFavorites={addToFavorites}
          />
        ))
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
};

export default Favorites;
