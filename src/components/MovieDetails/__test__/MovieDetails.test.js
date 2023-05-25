import { render, screen, fireEvent } from "@testing-library/react";
import MovieDetails from "../movieDetails";

describe("SortControl", () => {
  test("renders movie tile component", () => {
    const movie = {
      "id": 424785,
      "title": "Transformers 7",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2019-06-26",
      "poster_path": "https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg",
      "overview": "Plot unknown.",
      "budget": 0,
      "revenue": 0,
      "genres": [
          "Science Fiction",
          "Action",
          "Adventure"
      ],
      "runtime": null
  };
    render(
        <MovieDetails movie={movie}/>
    );
    const movieDetails = screen.getByTitle("movie-details");
    expect(movieDetails).toBeInTheDocument();
  });
});
