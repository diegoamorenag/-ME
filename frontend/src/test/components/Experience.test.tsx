import { render, screen } from "@testing-library/react";
import { Experience } from "../../pages/";

describe("Experience Component", () => {
  test("renders Experience heading", () => {
    render(<Experience />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  test("renders experience cards", () => {
    const { container } = render(<Experience />);
    // Check if there are cards rendered
    const cards = container.querySelectorAll('[class*="card"]');
    expect(cards.length).toBeGreaterThan(0);
  });

  test("has correct section id", () => {
    const { container } = render(<Experience />);
    const section = container.querySelector("#experience");
    expect(section).toBeInTheDocument();
  });
});
