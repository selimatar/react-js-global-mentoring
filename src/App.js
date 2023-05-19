import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieListPage from './components/MovieListPage/movieListPage';
import SearchForm from './components/Search/searchForm';
import MovieDetailsWrapper from './components/MovieDetails/movieDetailsWrapper';

function App() {
  const [searchQuery, setSearchQuery] = useState(''); //search query

  const handleSearchSubmit = (value) => {
    return event => {
      event.preventDefault();
      setSearchQuery(value);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieListPage />}>
          <Route path="/:movieId" element={<MovieDetailsWrapper />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;