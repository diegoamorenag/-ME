import { render, screen } from "@testing-library/react";
import { Skills } from "../../pages/Skills";

describe("Skills Component", () => {
  test("renders Skills heading", () => {
    render(<Skills />);
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });

  test("renders component without crashing", () => {
    const { container } = render(<Skills />);
    expect(container).toBeInTheDocument();
  });

  test("has correct section id", () => {
    const { container } = render(<Skills />);
    const section = container.querySelector("#skills");
    expect(section).toBeInTheDocument();
  });
});
