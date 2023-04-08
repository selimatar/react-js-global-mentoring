import { render, screen, fireEvent } from '@testing-library/react';
import GenreSelect from "./genreSelect";

describe('GenreSelect', () => {
  const genreList = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Drama' }
  ];
  const currentSelected = 'Comedy';
  const selectGenre = jest.fn();

  test("renders genre list component", () => {
    render(<GenreSelect />);
    const searchForm = screen.getByText(/Genre List Component/i);
    expect(searchForm).toBeInTheDocument();
  });

  test('highlights a selected genre passed in props', () => {
  
    const currentSelected = 'Comedy';
    const { container } = render(<GenreSelect genreList={genreList} currentSelected={currentSelected} selectGenre={selectGenre} />);

    const genreBtn = container.querySelector('.active');    
    expect(genreBtn).toHaveClass('active');
  });

  it("calls 'onChange' callback with correct genre after click event", () => {
    const { getByText } = render(
      <GenreSelect
        genreList={genreList}
        currentSelected={currentSelected}
        selectGenre={selectGenre}
      />
    );

    const genreButton = getByText("Action");

    fireEvent.click(genreButton);

    expect(selectGenre).toHaveBeenCalledTimes(1);
    expect(selectGenre).toHaveBeenCalledWith(1);
  });
});