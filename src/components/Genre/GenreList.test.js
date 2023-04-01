import { render, screen } from '@testing-library/react';
import GenreList from "./genreList";

test("renders genre list component", () => {
  render(<GenreList />);
});