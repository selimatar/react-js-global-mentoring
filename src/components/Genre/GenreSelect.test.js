import { render, screen } from '@testing-library/react';
import GenreSelect from "./genreSelect";

test("renders genre list component", () => {
  render(<GenreSelect />);
  const searchForm = screen.getByText(/Genre List Component/i);
  expect(searchForm).toBeInTheDocument();
});