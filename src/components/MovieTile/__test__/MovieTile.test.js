import { render, screen, fireEvent } from "@testing-library/react";
import MovieTile from "../movieTile";

describe("MovieTile", () => {
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
  
  test("renders movie tile component", () => {
    render(
      <MovieTile
        key={movie.title}
        movieInfo={movie}
        onClick={() => {
          handleTileClick(movie);
        }}
        onEdit={() => handleEditClick(movie)}
        onDelete={() => handleDeleteClick(movie)}
      />
    );
    const movieTile = screen.getByTitle("movieTitle", {name: "movie tile component renders"});
    expect(movieTile).toBeInTheDocument();
  });

  it("should render MovieDetail component after click event", () => {
    const MockMovieDetail = () => <div>Mock Movie Detail Component</div>;
    const handleTileClick = jest.fn();
    const { getByTitle, getByText } = render(
      <MovieTile
        key={movie.title}
        movieInfo={movie}
        onClick={() => {
          handleTileClick(movie);
        }}
        onEdit={() => handleEditClick(movie)}
        onDelete={() => handleDeleteClick(movie)}
      />
    );
  
    const movieDiv = getByTitle("movieTitle", {name: "movie div component to check click event"});
    fireEvent.click(movieDiv);
    render(<MockMovieDetail />)
    const mockDetailElement = getByText(/Mock Movie Detail Component/i);
    expect(mockDetailElement).toBeInTheDocument();
  });
});
