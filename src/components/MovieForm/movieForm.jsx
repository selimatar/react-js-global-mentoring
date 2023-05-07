import React, { useState } from 'react';
import './movie-form.css';

const MovieForm = ({ initialMovieInfo = {}, onSubmit }) => {

  const [movieInfo, setMovieInfo] = useState(initialMovieInfo || {
    imageUrl: '',
    title: '',
    releaseYear: '',
    genres: [],
    description: '',
    duration: '',
    rating: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovieInfo((prevMovieInfo) => ({
      ...prevMovieInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(movieInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-col">
          <label className="item-title" htmlFor="title">Title</label><br/>
          <input
            type="text"
            id="title"
            name="title"
            className="input-item"
            placeholder={movieInfo.title || ''}
            value={movieInfo.title || ''}
            onChange={handleInputChange}
            required
          /><br/>
        </div>
        <div className="form-col">
          <label className="item-title" htmlFor="releaseDate">Release Date</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            className="input-item"
            value={movieInfo.releaseDate || ''}
            onChange={handleInputChange}
            required
          /><br/>
        </div>
      </div>

      <div className="form-row">
        <div className="form-col">
          <label className="item-title" htmlFor="movieUrl">Movie URL</label>
          <input
            type="url"
            id="movieUrl"
            name="movieUrl"
            className="input-item"
            placeholder={movieInfo.imageUrl || ''}
            value={movieInfo.imageUrl || ''}
            onChange={handleInputChange}
            required
          /><br/>
        </div>
        <div className="form-col">
          <label className="item-title" htmlFor="rating">Rating</label>
          <input
            type="text"
            id="rating"
            name="rating"
            className="input-item"
            placeholder={movieInfo.rating || ''}
            value={movieInfo.rating || ''}
            onChange={handleInputChange}
            required
          /><br/>
        </div>
      </div>
      
      <label className="item-title" htmlFor="description">Overwiew</label><br/>
      <textarea
        id="description"
        name="description"
        className="movie-overview"
        value={movieInfo.description || ''}
        onChange={handleInputChange}
        required
      ></textarea><br/>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default MovieForm;