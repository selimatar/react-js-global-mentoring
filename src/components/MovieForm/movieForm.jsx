import React, { useState } from 'react';

const MovieForm = ({ initialMovieInfo = {}, onSubmit }) => {
  const [movieInfo, setMovieInfo] = useState(initialMovieInfo);

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
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={movieInfo.title || ''}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={movieInfo.description || ''}
        onChange={handleInputChange}
        required
      ></textarea>

      <label htmlFor="releaseDate">Release Date</label>
      <input
        type="date"
        id="releaseDate"
        name="releaseDate"
        value={movieInfo.releaseDate || ''}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="posterUrl">Poster URL</label>
      <input
        type="url"
        id="posterUrl"
        name="posterUrl"
        value={movieInfo.posterUrl || ''}
        onChange={handleInputChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default MovieForm;