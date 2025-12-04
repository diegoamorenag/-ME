import { render, screen } from "@testing-library/react";
import { Footer } from "../../pages/";

describe("Footer Component", () => {
  test("renders Diego Amorena name", () => {
    render(<Footer />);
    expect(screen.getByText("Diego Amorena")).toBeInTheDocument();
  });

  test("renders copyright text with current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`© ${currentYear} All rights reserved.`)
    ).toBeInTheDocument();
  });

  test("renders GitHub link", () => {
    const { container } = render(<Footer />);
    const githubLink = container.querySelector(
      'a[href="https://github.com/diegoamorenag"]'
    );
    expect(githubLink).toBeInTheDocument();
  });

  test("renders LinkedIn link", () => {
    const { container } = render(<Footer />);
    const linkedinLink = container.querySelector(
      'a[href="https://linkedin.com/in/diegoamorenag"]'
    );
    expect(linkedinLink).toBeInTheDocument();
  });

  test("renders Email link", () => {
    const { container } = render(<Footer />);
    const emailLink = container.querySelector(
      'a[href="mailto:diegoamorenag@gmail.com"]'
    );
    expect(emailLink).toBeInTheDocument();
  });

  test("renders as footer element", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});
