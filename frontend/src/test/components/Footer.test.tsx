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
      'a[href="https://www.linkedin.com/in/diegoamorena"]'
    );
    expect(linkedinLink).toBeInTheDocument();
  });

  test("renders Email link", () => {
    const { container } = render(<Footer />);
    const emailLink = container.querySelector(
      'a[href="mailto:amorenadiegog@gmail.com"]'
    );
    expect(emailLink).toBeInTheDocument();
  });

  test("renders WhatsApp link", () => {
    const { container } = render(<Footer />);
    const whatsappLink = container.querySelector(
      'a[href="https://wa.me/59891036039"]'
    );
    expect(whatsappLink).toBeInTheDocument();
  });

  test("renders as footer element", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});
