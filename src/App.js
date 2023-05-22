import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieListPage from './components/MovieListPage/movieListPage';
import MovieDetailsWrapper from './components/MovieDetails/movieDetailsWrapper';
import AddMovieForm from './components/MovieForm/addMovieForm';
import EditMovieForm from './components/MovieForm/editMovieForm';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieListPage />}>
          <Route path=":movieId" element={<MovieDetailsWrapper />} />
          <Route path="/new" element={<AddMovieForm />} />
          <Route path=":movieId/edit" element={<EditMovieForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;