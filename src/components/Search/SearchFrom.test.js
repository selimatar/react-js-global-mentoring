import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
  it('should render without throwing an error', () => {
    const { getByRole } = render(<SearchForm handleSubmit={() => {}}/>);
    expect(getByRole('search-form')).toBeInTheDocument();
  });

  test('should render a search input with the correct initial value', () => {
    const { getByPlaceholderText } = render(<SearchForm handleSubmit={() => {}} />);
    
    const searchInput = getByPlaceholderText('What do you want to watch?');
    expect(searchInput.value).toBe('');
  });

  it('should update the search input value when the user types', () => {
    const { getByPlaceholderText } = render(<SearchForm handleSubmit={() => {}}/>);
    const input = getByPlaceholderText('What do you want to watch?');
    fireEvent.change(input, { target: { value: 'Spider-Man' } });
    expect(input.value).toEqual('Spider-Man');
  });

  test('should call the handleSubmit function when the form is submitted', () => {
    const handleSubmit = jest.fn();
    const { getByRole } = render(<SearchForm handleSubmit={handleSubmit} />);
    
    const form = getByRole('search-form');
    fireEvent.submit(form);
  
    expect(handleSubmit).toHaveBeenCalled();
  });
  
});
