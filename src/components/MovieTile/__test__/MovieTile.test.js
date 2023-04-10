import { render, screen, fireEvent } from "@testing-library/react";
import MovieTile from "../movieTile";
import { movieList } from "../../../data/movies";

describe("MovieTile", () => {
  const movie = {
    imageUrl: movieList[3].poster_path,
    title: movieList[3].title,
    releaseYear: movieList[3].release_date,
    genres: movieList[3].genres,
    description: movieList[3].overview,
    duration: movieList[3].runtime,
    rating: movieList[3].vote_average,
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
