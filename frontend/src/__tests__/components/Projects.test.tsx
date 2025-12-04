import { render, screen } from "@testing-library/react";
import { Projects } from "../../components/Projects";

describe("Projects Component", () => {
  test("renders Featured Projects heading", () => {
    render(<Projects />);
    expect(screen.getByText("Featured Projects")).toBeInTheDocument();
  });

  test("renders project cards", () => {
    const { container } = render(<Projects />);
    // Check if there are cards rendered
    const cards = container.querySelectorAll('[class*="card"]');
    expect(cards.length).toBeGreaterThan(0);
  });

  test("has correct section id", () => {
    const { container } = render(<Projects />);
    const section = container.querySelector("#projects");
    expect(section).toBeInTheDocument();
  });
});
