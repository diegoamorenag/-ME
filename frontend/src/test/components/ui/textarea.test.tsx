import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "../../../components/ui/textarea";

describe("Textarea Component", () => {
  test("renders textarea element", () => {
    render(<Textarea placeholder="Enter message" />);
    expect(screen.getByPlaceholderText("Enter message")).toBeInTheDocument();
  });

  test("accepts user input", async () => {
    render(<Textarea placeholder="Type here" />);
    const textarea = screen.getByPlaceholderText(
      "Type here"
    ) as HTMLTextAreaElement;

    await userEvent.type(textarea, "Hello World");

    expect(textarea.value).toBe("Hello World");
  });

  test("can be disabled", () => {
    render(<Textarea disabled placeholder="Disabled textarea" />);
    const textarea = screen.getByPlaceholderText("Disabled textarea");
    expect(textarea).toBeDisabled();
  });

  test("applies custom className", () => {
    render(<Textarea className="custom-textarea" placeholder="Custom" />);
    const textarea = screen.getByPlaceholderText("Custom");
    expect(textarea).toHaveClass("custom-textarea");
  });

  test("handles onChange events", async () => {
    const handleChange = jest.fn();
    render(<Textarea onChange={handleChange} placeholder="Change test" />);

    const textarea = screen.getByPlaceholderText("Change test");
    await userEvent.type(textarea, "a");

    expect(handleChange).toHaveBeenCalled();
  });

  test("can have a default value", () => {
    render(<Textarea defaultValue="Default text" />);
    const textarea = screen.getByDisplayValue(
      "Default text"
    ) as HTMLTextAreaElement;
    expect(textarea.value).toBe("Default text");
  });

  test("supports multiline text", async () => {
    render(<Textarea placeholder="Multiline" />);
    const textarea = screen.getByPlaceholderText(
      "Multiline"
    ) as HTMLTextAreaElement;

    await userEvent.type(textarea, "Line 1{enter}Line 2");

    expect(textarea.value).toContain("Line 1");
    expect(textarea.value).toContain("Line 2");
  });
});
