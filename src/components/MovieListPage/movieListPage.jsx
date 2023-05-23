import React, { useState, useEffect } from 'react';
import SearchForm from '../Search/searchForm';
import Dialog from '../Dialog/dialog';
import MovieForm from '../MovieForm/movieForm';
import '../MovieForm/movie-form.css';
import './movie-list-page.css';
import GenreSelect from '../Genre/genreSelect';
import { genreList } from '../Genre/genre-list';
import { selectGenre } from '../Genre/selectGenre';
import SortControl from '../SortControl/sortControl';
import MovieTile from '../MovieTile/movieTile';
import MovieDetails from '../MovieDetails/movieDetails';

const MovieListPage = () => {
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [sortCriterion, setSortCriterion] = useState('release_date'); // sort criterion
    const [selectedMovie, setSelectedMovie] = useState({}); // selected movie
    const [showDetail, setShowDetail] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [editingMovie, setEditingMovie] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); //search query
    const [activeGenre, setActiveGenre] = useState('All'); //active genre
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]); //movie list

    useEffect(() => {
        setIsLoading(true);
        const query = buildQuery();
        fetch(`http://localhost:4000/movies?${query}`)
          .then(response => response.json())
          .then(data => {
            setMovies(data.data);
            setIsLoading(false);
          })
          .catch(error => console.error(error));
    }, [searchQuery, sortCriterion, activeGenre]);
      
    function buildQuery() {
        const queryParts = [];
        if (searchQuery && searchQuery !== '') {
            queryParts.push(`${'search'}=${searchQuery}&&searchBy=title`);
        }
        if (sortCriterion) {
            queryParts.push(`${'sortBy'}=${sortCriterion}&sortOrder=desc`);
        }
        if (activeGenre !== 'All') {
            queryParts.push(`${'filter'}=${activeGenre}`);
        }
        return queryParts.join('&');
    }

    const handleSearchSubmit = (value) => {
        return event => {
            event.preventDefault();
            setSearchQuery(value);
        }
    };

    const handleTileClick = (movie) => {
        setShowDetail(true);
        setSelectedMovie(movie);
    }

    const handleAddClick = () => {
        setShowAddDialog(true);
    }
    
    const handleEditClick = (movie) => {
        setEditingMovie(movie);
        setShowEditDialog(true);
    }
    
    const handleDeleteClick = () => {
        setShowDeleteDialog(true);
    }

    const handleSortByChange = (newSortBy) => {
        setSortCriterion(newSortBy);
    }

    return (
        <>
            {showDetail && selectedMovie ? <MovieDetails movie={selectedMovie}/> : 
            <>
                <div className='add-movie-div'>
                    <button className='add-movie-button' onClick={handleAddClick}>+ Add Movie</button>
                </div>
                <div className='movie-list-page'>
                    <SearchForm initialSearchQuery={searchQuery} handleSubmit={handleSearchSubmit} />
                </div>
            </>}
            <div className='movie-filtering'>
                <GenreSelect genreList={genreList} activeGenre={activeGenre} setActiveGenre={setActiveGenre} selectGenre={selectGenre}/>
                <SortControl currentSelection={sortCriterion} onSelectionChange={handleSortByChange} />
            </div>
            <p style={{marginLeft: "40px"}}>{movies.length > 0 ? (movies.length + " movies found") : "No movies found"}</p>
            <div className='movie-list-container'>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    movies.map((movie) => (
                        <MovieTile
                        key={movie.title}
                        movieInfo={movie}
                        onClick={() => handleTileClick(movie)}
                        onEdit={() => handleEditClick(movie)}
                        onDelete={() => handleDeleteClick(movie)}
                        />
                    ))
                )}
            </div>
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
        </>
    );
}

export default MovieListPage;