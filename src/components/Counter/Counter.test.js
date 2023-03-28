import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("renders counter component", () => {
  const counter = render(<Counter />);
  const countElement = screen.getByText(0);
  expect(countElement).toBeInTheDocument();
});

test("should decraese count when click button", () => {
  render(<Counter />);
  const decraeseButton = screen.getByText("+1");
  expect(decraeseButton).toBeInTheDocument();
});

test("should increase count when click button", () => {
  render(<Counter />);
  const increaseButton = screen.getByText("-1");
  expect(increaseButton).toBeInTheDocument();
});
