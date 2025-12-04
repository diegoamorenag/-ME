import { render, screen } from "@testing-library/react";
import { App } from "./App";

const MinimalComponent = () => {
  return (
    <div>
      <h1>Minimal Component</h1>
    </div>
  );
};
test("renders minimal component", () => {
  render(<MinimalComponent />);
  const heading = screen.getByText("Minimal Component");
  expect(heading).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<App />);

  const linkElements = screen.getAllByText("Diego Amorena");
  expect(linkElements.length).toBeGreaterThan(0);
});
