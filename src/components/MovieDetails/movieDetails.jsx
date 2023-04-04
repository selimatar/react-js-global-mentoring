import React from 'react';
import './movieDetails.css'

const MovieDetails = (props) => {
    const lastIndex = props.genres.length - 1;
    const genres = props.genres.slice(0, lastIndex).join(', ') + (lastIndex > 0 ? ' & ' : '') + props.genres[lastIndex];
    return (
        <div className='movie-details'>
            <img alt={props.movieName} className='movie-image' src={props.imageUrl} />
            <div className='movie-information'>
                <div className='movie-header'>
                    <p className='movie-title'>{props.movieName}</p>
                    <span className='movie-avarage'>{props.rating}</span>
                </div>
                <span className='movie-genres'>{genres}</span>
                <p className='movie-release'>{props.releaseYear}</p>
                <p className='movie-duration'>{props.duration}</p>
                <p className='movie-description'>{props.description}</p>
            </div>
        </div>
    );
};

export default MovieDetails;