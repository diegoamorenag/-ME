import { render, screen } from "@testing-library/react";
import { Navbar } from "../../pages/Navbar";

describe("Navbar Component", () => {
  test("renders Diego Amorena name/logo", () => {
    render(<Navbar />);
    expect(screen.getByText("Diego Amorena")).toBeInTheDocument();
  });

  test("renders Home navigation link", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  test("renders Projects navigation link", () => {
    render(<Navbar />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  test("renders Education navigation link", () => {
    render(<Navbar />);
    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  test("renders Experience navigation link", () => {
    render(<Navbar />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  test("renders Contact navigation link", () => {
    render(<Navbar />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("renders as nav element", () => {
    const { container } = render(<Navbar />);
    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();
  });
});
