import { render, screen } from '@testing-library/react';
import GenreList from "./GenreList";

test("renders genre list component", () => {
  render(<GenreList />);
});