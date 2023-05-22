import React from 'react';
import MovieForm from '../../components/MovieForm/movieForm';
import Dialog from '../../components/Dialog/dialog';

export default {
  title: 'MovieDialog',
  component: Dialog,
};

const movieInfo = {
  title: "Thor: Ragnarok", 
  releaseYear: '2017', 
  genres: [          
    "Action",
    "Adventure",
    "Fantasy"
  ], 
  description: 'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.',
  imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
  duration: 130, rating: 8.7
}

export const AddMovie = () => (
  <Dialog title="Add Movie" onClose={() => console.log('Add movie dialog closed')}>
    <MovieForm />
  </Dialog>
);

export const EditMovie = () => (
  <Dialog title="Edit Movie" onClose={() => console.log('Edit movie dialog closed')}>
    <MovieForm initialMovieInfo={movieInfo} />
  </Dialog>
);

export const DeleteMovie = () => (
  <Dialog title="Delete Movie" onClose={() => console.log('Delete movie dialog closed')}>
    <p>Movie has been deleted.</p>
  </Dialog>
);