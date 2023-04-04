import React from 'react';
import './movieTile.css'

const MovieTile = (props) => {
  const lastIndex = props.genres.length - 1;
  const genres = props.genres.slice(0, lastIndex).join(', ') + (lastIndex > 0 ? ' & ' : '') + props.genres[lastIndex];

  return (
    <div className="movie-tile">
      <div className="movie-image">
        <img src={props.imageUrl} alt={props.movieName} />
      </div>
      <div className="movie-details">
        <div className="movie-name">{props.movieName}</div>
        <div className="movie-year">{props.releaseYear}</div>
      </div>
      <div className="movie-genres">
          <span className="genres">{genres}</span>
        </div>
    </div>
  );
};

export default MovieTile;
