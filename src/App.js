import React, { useState } from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SearchForm from "./components/Search/SearchForm";
import GenreList from "./components/Genre/GenreList";
import { genreList } from "./components/Genre/genre-list";
import { movieList } from "./data/movies";
import { selectGenre } from "./components/Genre/selectGenre";

function handleSubmit(value) {
  return event => {
    event.preventDefault()
    alert('A film was submitted: ' + value);
  }
}

const movies = [
  {
    imageUrl: movieList[0].poster_path,
    title: movieList[0].title,
    releaseYear: movieList[0].release_date,
    genres: movieList[0].genres,
    description: movieList[0].overview,
    duration: movieList[0].runtime,
    rating: movieList[0].vote_average
  },
  {
    imageUrl: movieList[3].poster_path,
    title: movieList[3].title,
    releaseYear: movieList[3].release_date,
    genres: movieList[3].genres,
    description: movieList[3].overview,
    duration: movieList[3].runtime,
    rating: movieList[3].vote_average
  },
];

function App() {
  const [sortBy, setSortBy] = useState('release-date');
  const [showDetail, setShowDetail] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  
  const handleTileClick = (movie) => {
    setShowDetail(true);
    setSelectedMovie(movie);
  };

  const handleEditClick = (movie) => {
    console.log('Edit clicked:', movie.title);
  };

  const handleDeleteClick = (movie) => {
    console.log('Delete clicked:', movie.title);
  };

  const handleSortByChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  return (
    <>
      <Counter />
      <SearchForm initialSearchQuery="" handleSubmit={handleSubmit} />
      <GenreList genreList={genreList} currentSelected="All" selectGenre={selectGenre}/>
    </>
  );
}

export default App;
