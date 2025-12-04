import { render, screen } from "@testing-library/react";
import { Badge } from "../../../components/ui/badge";

describe("Badge Component", () => {
  test("renders badge with text", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  test("applies default variant styling", () => {
    render(<Badge>Default Badge</Badge>);
    const badge = screen.getByText("Default Badge");
    expect(badge).toHaveClass("bg-primary");
  });

  test("applies secondary variant styling", () => {
    render(<Badge variant="secondary">Secondary</Badge>);
    const badge = screen.getByText("Secondary");
    expect(badge).toHaveClass("bg-secondary");
  });

  test("applies destructive variant styling", () => {
    render(<Badge variant="destructive">Destructive</Badge>);
    const badge = screen.getByText("Destructive");
    expect(badge).toHaveClass("bg-destructive");
  });

  test("applies outline variant styling", () => {
    render(<Badge variant="outline">Outline</Badge>);
    const badge = screen.getByText("Outline");
    expect(badge).toHaveClass("border");
  });

  test("applies custom className", () => {
    render(<Badge className="custom-badge">Custom</Badge>);
    const badge = screen.getByText("Custom");
    expect(badge).toHaveClass("custom-badge");
  });

  test("renders as div element by default", () => {
    const { container } = render(<Badge>Badge</Badge>);
    const badge = container.firstChild;
    expect(badge?.nodeName).toBe("DIV");
  });
});
