import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../../components/ui/card";

describe("Card Components", () => {
  describe("Card", () => {
    test("renders card component", () => {
      render(<Card>Card Content</Card>);
      expect(screen.getByText("Card Content")).toBeInTheDocument();
    });

    test("applies custom className", () => {
      const { container } = render(
        <Card className="custom-class">Content</Card>
      );
      const card = container.firstChild;
      expect(card).toHaveClass("custom-class");
    });
  });

  describe("CardHeader", () => {
    test("renders card header", () => {
      render(<CardHeader>Header Content</CardHeader>);
      expect(screen.getByText("Header Content")).toBeInTheDocument();
    });
  });

  describe("CardTitle", () => {
    test("renders card title", () => {
      render(<CardTitle>Title Text</CardTitle>);
      expect(screen.getByText("Title Text")).toBeInTheDocument();
    });

    test("renders default text when no children provided", () => {
      render(<CardTitle />);
      expect(screen.getByText("Untitled")).toBeInTheDocument();
    });

    test("renders as h3 element", () => {
      render(<CardTitle>Title</CardTitle>);
      const title = screen.getByText("Title");
      expect(title.tagName).toBe("H3");
    });
  });

  describe("CardDescription", () => {
    test("renders card description", () => {
      render(<CardDescription>Description text</CardDescription>);
      expect(screen.getByText("Description text")).toBeInTheDocument();
    });

    test("applies muted foreground styling", () => {
      render(<CardDescription>Description</CardDescription>);
      const description = screen.getByText("Description");
      expect(description).toHaveClass("text-muted-foreground");
    });
  });

  describe("CardContent", () => {
    test("renders card content", () => {
      render(<CardContent>Main content</CardContent>);
      expect(screen.getByText("Main content")).toBeInTheDocument();
    });
  });

  describe("CardFooter", () => {
    test("renders card footer", () => {
      render(<CardFooter>Footer content</CardFooter>);
      expect(screen.getByText("Footer content")).toBeInTheDocument();
    });
  });

  describe("Complete Card", () => {
    test("renders complete card with all components", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Test Title</CardTitle>
            <CardDescription>Test Description</CardDescription>
          </CardHeader>
          <CardContent>Test Content</CardContent>
          <CardFooter>Test Footer</CardFooter>
        </Card>
      );

      expect(screen.getByText("Test Title")).toBeInTheDocument();
      expect(screen.getByText("Test Description")).toBeInTheDocument();
      expect(screen.getByText("Test Content")).toBeInTheDocument();
      expect(screen.getByText("Test Footer")).toBeInTheDocument();
    });
  });
});
