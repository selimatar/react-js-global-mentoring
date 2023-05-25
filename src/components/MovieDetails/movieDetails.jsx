import React from "react";
import "./movieDetails.css";

const MovieDetails = (props) => {
  const lastIndex = props.movie.genres.length - 1;
  const genres = props.movie.genres.slice(0, lastIndex).join(", ") + (lastIndex > 0 ? " & " : "") + props.movie.genres[lastIndex];
  return (
    <>
      <h2 style={{ margin: 40 }}>Movie Details Component</h2>
      <div className="movie-details" title="movie-details">
        <div className="movie-image">
          <img style={{height: "400px"}} alt={props.movie.title} src={props.movie.poster_path} />
        </div>
        <div className="movie-information">
          <div className="movie-header">
            <p className="movie-title">{props.movie.title}</p>
            <span className="movie-avarage">{props.movie.vote_average}</span>
          </div>
          <span className="movie-genres">{genres}</span>
          <p className="movie-release">{props.movie.release_date}</p>
          <p className="movie-duration">{props.movie.runtime}</p>
          <p className="movie-description">{props.movie.overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;