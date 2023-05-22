import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dialog from '../dialog';

describe('Dialog component', () => {
  it('should render title and content', () => {
    const title = 'Delete Movie';
    const content = 'Are you sure you want to delete this movie?';
    const onClose = jest.fn();
    const { getByText } = render(
      <Dialog title={title} onClose={onClose}>
        {content}
      </Dialog>
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(content)).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', () => {
    const title = 'Delete Movie';
    const content = 'Are you sure you want to delete this movie?';
    const onClose = jest.fn();
    const { getByText } = render(
      <Dialog title={title} onClose={onClose}>
        {content}
      </Dialog>
    );
    fireEvent.click(getByText('×'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
