import { render, screen } from "@testing-library/react";
import { ProjectsPage } from "../../pages/";

describe("Projects Component", () => {
  test("renders Featured Projects heading", () => {
    render(<ProjectsPage />);
    expect(screen.getByText("Featured Projects")).toBeInTheDocument();
  });

  test("renders project cards", () => {
    const { container } = render(<ProjectsPage />);
    // Check if there are cards rendered
    const cards = container.querySelectorAll('[class*="card"]');
    expect(cards.length).toBeGreaterThan(0);
  });

  test("has correct section id", () => {
    const { container } = render(<ProjectsPage />);
    const section = container.querySelector("#projects");
    expect(section).toBeInTheDocument();
  });
});
