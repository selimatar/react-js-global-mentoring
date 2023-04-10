import { render, screen, fireEvent } from "@testing-library/react";
import MovieDetails from "../movieDetails";
import { movieList } from "../../../data/movies";

describe("SortControl", () => {
  test("renders movie tile component", () => {
    const movie = {
        imageUrl: movieList[0].poster_path,
        title: movieList[0].title,
        releaseYear: movieList[0].release_date,
        genres: movieList[0].genres,
        description: movieList[0].overview,
        duration: movieList[0].runtime,
        rating: movieList[0].vote_average
    }
    render(
        <MovieDetails movie={movie}/>
    );
    const movieDetails = screen.getByTitle("movie-details");
    expect(movieDetails).toBeInTheDocument();
  });
});
