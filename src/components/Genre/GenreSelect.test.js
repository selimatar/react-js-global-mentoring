import { render, screen } from '@testing-library/react';
import GenreSelect from './genreSelect';

test("renders genre list component", () => {
  render(<GenreSelect />);
});