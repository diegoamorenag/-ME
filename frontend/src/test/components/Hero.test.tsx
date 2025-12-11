import { render, screen } from "@testing-library/react";
import { HeroPage } from "../../pages/";

describe("Hero Component", () => {
  test("renders hero section with name", () => {
    render(<HeroPage />);
    expect(screen.getByText("Diego Amorena")).toBeInTheDocument();
  });

  test("renders greeting text", () => {
    render(<HeroPage />);
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
  });

  test("renders description text", () => {
    render(<HeroPage />);
    expect(
      screen.getByText(
        /Full Stack Engineer building end-to-end systems with React, .NET, Python, Docker, and more./i
      )
    ).toBeInTheDocument();
  });

  test("renders View Projects button", () => {
    render(<HeroPage />);
    expect(screen.getByText("View Projects")).toBeInTheDocument();
  });

  test("renders Contact Me button", () => {
    render(<HeroPage />);
    expect(screen.getByText("Contact Me")).toBeInTheDocument();
  });

  test("has correct section id", () => {
    const { container } = render(<HeroPage />);
    const section = container.querySelector("#home");
    expect(section).toBeInTheDocument();
  });
});
