import React, { useState } from 'react';

const MovieTile = (props) => {
  const [showContextMenu, setShowContextMenu] = useState(false);

  const handleContextMenuClick = (event) => {
    event.preventDefault();
    setShowContextMenu(!showContextMenu);
  };

  const handleEditClick = () => {
    // Call the edit callback function passed in as a prop
    props.onEdit(props.id);
    setShowContextMenu(false);
  };

  const handleDeleteClick = () => {
    // Call the delete callback function passed in as a prop
    props.onDelete(props.id);
    setShowContextMenu(false);
  };

  return (
    <div className="movie-tile" onContextMenu={handleContextMenuClick}>
      <div className="movie-image">
        <img src={props.imageUrl} alt={props.movieName} />
      </div>
      <div className="movie-details">
        <div className="movie-name">{props.movieName}</div>
        <div className="movie-year">{props.releaseYear}</div>
        <div className="movie-genres">
          {props.genres.map((genre) => (
            <span key={genre.id} className="genre">{genre.name}</span>
          ))}
        </div>
      </div>
      {showContextMenu && (
        <div className="context-menu">
          <div className="menu-item" onClick={handleEditClick}>Edit</div>
          <div className="menu-item" onClick={handleDeleteClick}>Delete</div>
        </div>
      )}
    </div>
  );
};

export default MovieTile;
