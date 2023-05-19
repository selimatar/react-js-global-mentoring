import React, { useState, useEffect } from 'react';
import { useSearchParams, Outlet } from "react-router-dom";
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
    const [sortCriterion, setSortCriterion] = useState('release-date'); // sort criterion
    const [selectedMovie, setSelectedMovie] = useState({}); // selected movie
    const [movieId, setMovieId] = useState();
    const [showDetail, setShowDetail] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [editingMovie, setEditingMovie] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); //search query
    const [activeGenre, setActiveGenre] = useState('All'); //active genre
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]); //movie list

    const [searchParams, setSearchParams] = useSearchParams();
  
    useEffect(() => {
      setSearchParams({ sortCriterion, searchQuery, activeGenre });
    }, [sortCriterion, searchQuery, activeGenre, setSearchParams]);

    useEffect(() => {
        setSearchParams({ movieId });
    }, [movieId])
    
    useEffect(() => {
      const params = new URLSearchParams(searchParams);
      const newMovieId = params.get('/') || '';
      const newSortCriterion = params.get('sortCriterion') || 'release-date';
      const newSearchQuery = params.get('searchQuery') || '';
      const newActiveGenre = params.get('activeGenre') || 'All';
      setMovieId(newMovieId);
      setSortCriterion(newSortCriterion);
      setSearchQuery(newSearchQuery);
      setActiveGenre(newActiveGenre);
    }, [searchParams, setMovieId, setSortCriterion, setSearchQuery, setActiveGenre]);

    useEffect(() => {
        setIsLoading(true);
        fetch(showDetail && movieId ? `http://localhost:4000/movies?${movieId}` : `http://localhost:4000/movies?${buildQuery()}`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.data);
            setIsLoading(false);
        })
        .catch(error => console.error(error));
    }, [searchQuery, movieId, sortCriterion, activeGenre]);
      
    function buildQuery() {
        const queryParts = [];
        if (searchQuery && searchQuery !== '') {
            queryParts.push(`${'search'}=${searchQuery}`);
        }
        if (sortCriterion) {
            queryParts.push(`${'sortBy'}=${sortCriterion}`);
        }
        if (activeGenre !== 'All') {
            queryParts.push(`${'searchBy'}=${activeGenre}`);
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
        setMovieId(movie.id);
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
            {/* showDetail && selectedMovie ? <MovieDetails movie={selectedMovie}/> : 
            <>
                <div className='movie-list-page'>
                    <SearchForm initialSearchQuery={searchQuery} handleSubmit={handleSearchSubmit} /> 
                </div>
            </> */}
            <div className='add-movie-div'>
                <button className='add-movie-button' onClick={handleAddClick}>+ Add Movie</button>
            </div>
            <Outlet />
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