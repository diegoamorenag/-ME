import { render, screen } from "@testing-library/react";
import { SkillsPage } from "../../pages/";

describe("Skills Component", () => {
  test("renders Skills heading", () => {
    render(<SkillsPage />);
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });

  test("renders component without crashing", () => {
    const { container } = render(<SkillsPage />);
    expect(container).toBeInTheDocument();
  });

  test("has correct section id", () => {
    const { container } = render(<SkillsPage />);
    const section = container.querySelector("#skills");
    expect(section).toBeInTheDocument();
  });
});
