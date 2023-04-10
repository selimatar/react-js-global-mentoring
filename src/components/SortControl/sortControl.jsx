import React from 'react';
import './sortControl.css'
const SortControl = ({ currentSelection, onSelectionChange }) => {
  const handleSelectionChange = (event) => {
    onSelectionChange(event.target.value);
  };

  return (
    <div className="sort-control" role="form">
      <label className="sort-by-select" htmlFor="sort-by-select">Sort by:</label>
      <select className="release-date" id="sort-by-select" value={currentSelection} onChange={handleSelectionChange}>
        <option value="release-date">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortControl;