import { render, screen } from "@testing-library/react";
import { Education } from "../../pages/Education";

describe("Education Component", () => {
  test("renders Education heading", () => {
    render(<Education />);
    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  test("renders UDELAR university", () => {
    render(<Education />);
    const elements = screen.getAllByText(/UDELAR/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  test("renders Computer Science degree", () => {
    render(<Education />);
    expect(screen.getByText(/Computer Science/i)).toBeInTheDocument();
  });

  test("has correct section id", () => {
    const { container } = render(<Education />);
    const section = container.querySelector("#education");
    expect(section).toBeInTheDocument();
  });
});
