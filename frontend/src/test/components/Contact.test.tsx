import { render, screen } from "@testing-library/react";
import { ContactPage } from "../../pages/";

describe("Contact Component", () => {
  test("renders Contact heading", () => {
    render(<ContactPage />);
    expect(screen.getByText("Get in Touch")).toBeInTheDocument();
  });

  test("renders name input field", () => {
    render(<ContactPage />);
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
  });

  test("renders email input field", () => {
    render(<ContactPage />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });

  test("renders message textarea", () => {
    render(<ContactPage />);
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument();
  });

  test("renders send message button", () => {
    render(<ContactPage />);
    expect(screen.getByText("Send Message")).toBeInTheDocument();
  });

  test("has correct section id", () => {
    const { container } = render(<ContactPage />);
    const section = container.querySelector("#contact");
    expect(section).toBeInTheDocument();
  });
});
