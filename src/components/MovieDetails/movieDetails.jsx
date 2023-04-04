import React from 'react';
import './movieDetails.css'

const MovieDetails = (props) => {
    const lastIndex = props.genres.length - 1;
    const genres = props.genres.slice(0, lastIndex).join(', ') + (lastIndex > 0 ? ' and ' : '') + props.genres[lastIndex];

    return (
        <div className="movie-card">
            <img src={props.imageUrl} alt={props.movieName} className="movie-image"/>
            <h2 className="movie-title">{props.movieName}</h2>
            <p className="genres">{genres}</p> 
            <p className="releaseYear">{props.releaseYear}</p>
        </div>
    );
};

export default MovieDetails;