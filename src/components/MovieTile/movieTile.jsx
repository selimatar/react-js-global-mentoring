import React, { useState } from 'react';
import './movieTile.css'

const MovieTile = ({ movieInfo, onClick, onEdit, onDelete }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setShowContextMenu(true);
  };

  const handleContextMenuClose = () => {
    setShowContextMenu(false);
  };

  const handleEditClick = () => {
    setShowContextMenu(false);
    onEdit();
  };

  const handleDeleteClick = () => {
    setShowContextMenu(false);
    onDelete();
  };

  return (
      <>
        <h2 style={{margin: 40}}>Movie Tile Component</h2>
        <div className="movie-tile" onClick={onClick} title="movieTitle">
          <img className="movie-image" src={movieInfo.imageUrl} alt={movieInfo.title} />
          <div className="movie-tile-details">
            <h2>{movieInfo.title}</h2>
            <p>{movieInfo.releaseYear}</p>
            <p>{movieInfo.genres.join(', ')}</p>
          </div>
          <div className="movie-tile-actions">
            <button onClick={handleContextMenu}>...</button>
            {showContextMenu && (
              <div className="context-menu" onBlur={handleContextMenuClose}>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>
              </div>
            )}
          </div>
        </div>
      </>
  );
};

export default MovieTile;