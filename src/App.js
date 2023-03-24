import React from "react";
import './App.css';
import Counter from "./components/Counter/Counter";
import SearchForm from "./components/Search/SearchForm";
import GenreList from "./components/Genre/GenreList";
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
      <GenreList genreList={genreList} currentSelected="All" selectGenre={selectGenre}/>
    </>
  );
}

export default App;
