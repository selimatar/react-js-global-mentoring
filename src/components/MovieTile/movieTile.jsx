import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './movieTile.css'

const MovieTile = ({ movieInfo, onClick, onEdit, onDelete }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const dialogRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setShowContextMenu(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setShowContextMenu(true);
  };

  const handleContextMenuClose = () => {
    setShowContextMenu(false);
  };

  const handleEditClick = () => {
    setShowContextMenu(false);
    navigate(`/${movieInfo.id}/edit`);
    onEdit();
  };

  const handleDeleteClick = () => {
    setShowContextMenu(false);
    onDelete();
  };

  return (
    <div className="movie-tile" title="movieTitle">
      <img className="movie-image" onClick={onClick} src={movieInfo.poster_path} alt={movieInfo.title} />
      <div className="movie-tile-details">
        <h2>{movieInfo.title}</h2>
        <p>{movieInfo.releaseYear}</p>
        <p>{movieInfo.genres.join(', ')}</p>
      </div>
      <div className="movie-tile-actions">
        <button onClick={handleContextMenu} ref={dialogRef}>...</button>
        {showContextMenu && (
          <div className="context-menu" onBlur={handleContextMenuClose}>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
          </div>
        )}
      </div>
    </div>
  )
};

export default MovieTile;
