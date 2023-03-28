import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

test("renders search form component", () => {
  render(<SearchForm initialSearchQuery=""/>);
});

