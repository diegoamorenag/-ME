import { render, screen } from "@testing-library/react";
import { Contact } from "../../pages/Contact";

describe("Contact Component", () => {
  test("renders Contact heading", () => {
    render(<Contact />);
    expect(screen.getByText("Get in Touch")).toBeInTheDocument();
  });

  test("renders name input field", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
  });

  test("renders email input field", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });

  test("renders message textarea", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument();
  });

  test("renders send message button", () => {
    render(<Contact />);
    expect(screen.getByText("Send Message")).toBeInTheDocument();
  });

  test("has correct section id", () => {
    const { container } = render(<Contact />);
    const section = container.querySelector("#contact");
    expect(section).toBeInTheDocument();
  });
});
