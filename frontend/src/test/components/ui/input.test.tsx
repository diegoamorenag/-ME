import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "../../../components/ui/input";

describe("Input Component", () => {
  test("renders input element", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  test("accepts user input", async () => {
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText("Type here") as HTMLInputElement;

    await userEvent.type(input, "Hello World");

    expect(input.value).toBe("Hello World");
  });

  test("can be disabled", () => {
    render(<Input disabled placeholder="Disabled input" />);
    const input = screen.getByPlaceholderText("Disabled input");
    expect(input).toBeDisabled();
  });

  test("applies custom className", () => {
    render(<Input className="custom-input" placeholder="Custom" />);
    const input = screen.getByPlaceholderText("Custom");
    expect(input).toHaveClass("custom-input");
  });

  test("supports different input types", () => {
    render(<Input type="email" placeholder="Email" />);
    const input = screen.getByPlaceholderText("Email");
    expect(input).toHaveAttribute("type", "email");
  });

  test("handles onChange events", async () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} placeholder="Change test" />);

    const input = screen.getByPlaceholderText("Change test");
    await userEvent.type(input, "a");

    expect(handleChange).toHaveBeenCalled();
  });

  test("can have a default value", () => {
    render(<Input defaultValue="Default text" />);
    const input = screen.getByDisplayValue("Default text") as HTMLInputElement;
    expect(input.value).toBe("Default text");
  });
});
