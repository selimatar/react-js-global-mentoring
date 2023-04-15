import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

describe('Counter' , () => {
  test("renders counter component", () => {
    render(<Counter />);
    const countElement = screen.getByText(0);
    expect(countElement).toBeInTheDocument();
  });
  
  test('clicking on button increments counter', () => { 
    // render the component 
    render(<Counter />); 
    // simulate the user click on the button 
    fireEvent.click(screen.getByText('+1')); 
    // outcome 
    expect(screen.getByTitle('count').textContent).toBe('1'); 
  });
  
  test('clicking on button decrements counter', () => { 
    // render the component 
    render(<Counter />); 
    // simulate the user click on the button 
    fireEvent.click(screen.getByText('-1')); 
    // outcome 
    expect(screen.getByTitle('count').textContent).toBe('-1'); 
  });
});