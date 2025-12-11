import { render, screen } from "@testing-library/react";
import { ExperiencePage } from "../../pages/";

describe("Experience Component", () => {
  test("renders Experience heading", () => {
    render(<ExperiencePage />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  test("renders experience cards", () => {
    const { container } = render(<ExperiencePage />);
    // Check if there are cards rendered
    const cards = container.querySelectorAll('[class*="card"]');
    expect(cards.length).toBeGreaterThan(0);
  });

  test("has correct section id", () => {
    const { container } = render(<ExperiencePage />);
    const section = container.querySelector("#experience");
    expect(section).toBeInTheDocument();
  });
});
