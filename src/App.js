import React, { useState } from 'react';
import './App.css';
import Counter from "./components/Counter/counter";
import SearchForm from "./components/Search/searchForm";
import GenreSelect from "./components/Genre/genreSelect";
import { genreList } from "./components/Genre/genre-list";
import { selectGenre } from "./components/Genre/selectGenre";
import MovieTile from "./components/MovieTile/movieTile";
import MovieDetails from "./components/MovieDetails/movieDetails";
import SortControl from "./components/SortControl/sortControl";
import Dialog from './components/Dialog/dialog';
import MovieForm from './components/MovieForm/movieForm';
import MovieListPage from './components/MovieListPage/movieListPage';

function handleSubmit(value) {
  return event => {
    event.preventDefault()
    alert('A film was submitted: ' + value);
  }
}


function App() {
  const [sortBy, setSortBy] = useState('release-date');
  const [showDetail, setShowDetail] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  
  const handleTileClick = (movie) => {
    setShowDetail(true);
    setSelectedMovie(movie);
  };

  const handleAddClick = () => {
    setShowAddDialog(true);
  };  

  const handleEditClick = (movie) => {
    setEditingMovie(movie);
    setShowEditDialog(true);
  };
  
  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const handleSortByChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      {/* <Counter />
      <SearchForm initialSearchQuery="" handleSubmit={handleSubmit} />
      <GenreSelect genreList={genreList} currentSelected="All" selectGenre={selectGenre}/>
      <SortControl currentSelection={sortBy} onSelectionChange={handleSortByChange} />
      <button className='add-movie-button' onClick={handleAddClick}>Add Movie</button>
      {movies.map((movie) => (
        <MovieTile
          key={movie.title}
          movieInfo={movie}
          onClick={() => handleTileClick(movie)}
          onEdit={() => handleEditClick(movie)}
          onDelete={() => handleDeleteClick(movie)}
        />
      ))};
      {showAddDialog && (
        <Dialog title="Add Movie" onClose={() => setShowAddDialog(false)}>
          <MovieForm />
        </Dialog>
      )}
      {showEditDialog && (
        <Dialog title="Edit Movie" onClose={() => setShowEditDialog(false)}>
          <MovieForm initialMovieInfo={editingMovie} />
        </Dialog>
      )}
      {showDeleteDialog && (
        <Dialog title="Delete Movie" onClose={() => setShowDeleteDialog(false)}>
          <p>Movie has been deleted.</p>
        </Dialog>
      )}
      {showDetail && <MovieDetails movie={selectedMovie}/>}
      <button style={{margin: "40px"}} onClick={() => setIsDialogOpen(true)}>Open Dialog</button>
      {isDialogOpen && (
        <Dialog title="My Dialog" onClose={handleDialogClose}>
          <p>This is the content of my dialog.</p>
          <MovieForm initialMovieInfo={movies[0]} />
        </Dialog>
      )} */}
      <MovieListPage />
    </>
  );
}

export default App;
