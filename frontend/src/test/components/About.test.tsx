import { render, screen } from "@testing-library/react";
import { About } from "../../pages/";

describe("About Component", () => {
  test("renders About Me heading", () => {
    render(<About />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  test("renders description about location", () => {
    render(<About />);
    const elements = screen.getAllByText(/Montevideo, Uruguay/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  test("renders education information", () => {
    render(<About />);
    expect(screen.getByText(/Computer Science/i)).toBeInTheDocument();
  });

  test("renders Download CV button", () => {
    render(<About />);
    expect(screen.getByText("Download CV")).toBeInTheDocument();
  });

  test("has correct section id", () => {
    const { container } = render(<About />);
    const section = container.querySelector("#about");
    expect(section).toBeInTheDocument();
  });
});
