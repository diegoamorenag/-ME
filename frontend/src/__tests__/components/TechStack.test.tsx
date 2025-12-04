import { render, screen } from "@testing-library/react";
import { TechStack } from "../../components/TechStack";

describe("TechStack Component", () => {
  test("renders Tech Stack heading", () => {
    render(<TechStack />);
    expect(screen.getByText("Tech Stack")).toBeInTheDocument();
  });

  test("renders Frontend category", () => {
    render(<TechStack />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
  });

  test("renders Backend category", () => {
    render(<TechStack />);
    expect(screen.getByText("Backend")).toBeInTheDocument();
  });

  test("renders DevOps & Tools category", () => {
    render(<TechStack />);
    expect(screen.getByText(/DevOps & Tools/i)).toBeInTheDocument();
  });

  test("has correct section id", () => {
    const { container } = render(<TechStack />);
    const section = container.querySelector("#tech-stack");
    expect(section).toBeInTheDocument();
  });
});
