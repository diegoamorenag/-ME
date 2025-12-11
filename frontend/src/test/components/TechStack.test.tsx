import { render, screen } from "@testing-library/react";
import { TechStackPage } from "../../pages/";

describe("TechStack Component", () => {
  test("renders Tech Stack heading", () => {
    render(<TechStackPage />);
    expect(screen.getByText("Tech Stack")).toBeInTheDocument();
  });

  test("renders Frontend category", () => {
    render(<TechStackPage />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
  });

  test("renders Backend category", () => {
    render(<TechStackPage />);
    expect(screen.getByText("Backend")).toBeInTheDocument();
  });

  test("renders DevOps & Tools category", () => {
    render(<TechStackPage />);
    expect(screen.getByText(/DevOps & Tools/i)).toBeInTheDocument();
  });

  test("has correct section id", () => {
    const { container } = render(<TechStackPage />);
    const section = container.querySelector("#tech-stack");
    expect(section).toBeInTheDocument();
  });
});
