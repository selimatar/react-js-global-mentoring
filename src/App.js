import React from "react";
import './App.css';
import Counter from "./components/Counter/counter";
import SearchForm from "./components/Search/searchForm";
import GenreSelect from "./components/Genre/genreSelect";
import { genreList } from "./components/Genre/genre-list";
import { selectGenre } from "./components/Genre/selectGenre";

function handleSubmit(value) {
  return event => {
    event.preventDefault()
    alert('A film was submitted: ' + value);
  }
}

function App() {
  return (
    <>
      <Counter />
      <SearchForm initialSearchQuery="" handleSubmit={handleSubmit} />
      <GenreSelect genreList={genreList} currentSelected="All" selectGenre={selectGenre}/>
    </>
  );
}

export default App;
