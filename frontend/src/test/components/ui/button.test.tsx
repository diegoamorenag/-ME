import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../../../components/ui/button";

describe("Button Component", () => {
  test("renders button with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("applies default variant styling", () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByText("Default Button");
    expect(button).toHaveClass("bg-primary");
  });

  test("applies outline variant styling", () => {
    render(<Button variant="outline">Outline Button</Button>);
    const button = screen.getByText("Outline Button");
    expect(button).toHaveClass("border");
  });

  test("applies secondary variant styling", () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByText("Secondary Button");
    expect(button).toHaveClass("bg-secondary");
  });

  test("applies ghost variant styling", () => {
    render(<Button variant="ghost">Ghost Button</Button>);
    const button = screen.getByText("Ghost Button");
    expect(button).toHaveClass("hover:bg-accent");
  });

  test("applies large size styling", () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByText("Large Button");
    expect(button).toHaveClass("h-11");
  });

  test("applies small size styling", () => {
    render(<Button size="sm">Small Button</Button>);
    const button = screen.getByText("Small Button");
    expect(button).toHaveClass("h-9");
  });

  test("handles click events", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);

    const button = screen.getByText("Clickable");
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("can be disabled", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText("Disabled Button");
    expect(button).toBeDisabled();
  });

  test("renders as child component when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    const link = screen.getByText("Link Button");
    expect(link.tagName).toBe("A");
  });
});
