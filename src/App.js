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

function handleSubmit(value) {
  return event => {
    event.preventDefault()
    alert('A film was submitted: ' + value);
  }
}

function App() {
  const [sortBy, setSortBy] = useState('release-date');

  const handleSortByChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  return (
    <>
      <Counter />
      <SearchForm initialSearchQuery="" handleSubmit={handleSubmit} />
      <GenreSelect genreList={genreList} currentSelected="All" selectGenre={selectGenre}/>
      <MovieTile movieName="Fifty Shades Freed" releaseYear="2008" genres={["Drama", "Romance"]} imageUrl={"https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg"}/>
      <SortControl currentSelection={sortBy} onSelectionChange={handleSortByChange} />
      <MovieDetails 
        movieName="Star Wars: The Last Jedi" 
        releaseYear="2008" 
        genres={["Fantasy", "Adventure", "Science Fiction"]} 
        imageUrl={"https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg"}
        description="Rey develops her newly discovered abilities with the guidance of Luke Skywalker,
        who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order."
        rating="7.1"
      />
    </>
  );
}

export default App;
