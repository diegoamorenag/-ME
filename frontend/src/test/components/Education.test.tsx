import { render, screen } from "@testing-library/react";
import { EducationPage } from "../../pages/";

describe("Education Component", () => {
  test("renders Education heading", () => {
    render(<EducationPage />);
    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  test("renders UDELAR university", () => {
    render(<EducationPage />);
    const elements = screen.getAllByText(/UDELAR/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  test("renders Computer Science degree", () => {
    render(<EducationPage />);
    expect(screen.getByText(/Computer Science/i)).toBeInTheDocument();
  });

  test("has correct section id", () => {
    const { container } = render(<EducationPage />);
    const section = container.querySelector("#education");
    expect(section).toBeInTheDocument();
  });
});
