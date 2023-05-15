import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "./movieDetails";

function MovieDetailsWrapper() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
        //this fetch query is working false. need to check it out
        await fetch(`http://localhost:4000/movies?${movieId}`)
        .then(response => response.json())
        .then(data => {
            setMovie(data.data);
        })
        .catch(error => console.error(error));
    };
    fetchMovie();
  }, [movieId]);

  return movie ? <MovieDetails movie={movie[0] /* Here I got the first element of data because of wrong running query */} /> : <div>Loading...</div>;
}

export default MovieDetailsWrapper;