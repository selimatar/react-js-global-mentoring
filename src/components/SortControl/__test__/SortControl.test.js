import { render, screen, fireEvent } from "@testing-library/react";
import SortControl from "../sortControl";

describe("SortControl", () => {
  test("renders movie tile component", () => {
    render(
      <SortControl currentSelection="release-date" onSelectionChange={() => {}}/>
    );
    const sortControl = screen.getByRole("form");
    expect(sortControl).toBeInTheDocument();
  });
});