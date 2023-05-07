import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import MovieForm from './movieForm';
import Dialog from './Dialog';

export const AddMovie = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSubmit = (movieInfo) => {
    action('submit')(movieInfo);
    setIsDialogOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenDialog}>Add Movie</button>
      {isDialogOpen && (
        <Dialog title="Add Movie" onClose={handleCloseDialog}>
          <MovieForm onSubmit={handleSubmit} />
        </Dialog>
      )}
    </>
  );
};
