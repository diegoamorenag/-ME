// Import jest-dom matchers
import "@testing-library/jest-dom";

// Mock Framer Motion
jest.mock("framer-motion", () => ({
  ...jest.requireActual("framer-motion"),
  motion: new Proxy(
    {},
    {
      get: (_target, prop) => {
        // Return a component that renders its children
        const Component = ({ children, ...props }: any) => {
          const React = require("react");
          // Filter out Framer Motion specific props
          const {
            initial,
            animate,
            exit,
            transition,
            variants,
            whileHover,
            whileTap,
            whileFocus,
            whileDrag,
            whileInView,
            viewport,
            onAnimationStart,
            onAnimationComplete,
            layout,
            layoutId,
            drag,
            dragConstraints,
            dragElastic,
            dragMomentum,
            onDrag,
            onDragStart,
            onDragEnd,
            ...domProps
          } = props;
          return React.createElement(prop as string, domProps, children);
        };
        Component.displayName = `motion.${String(prop)}`;
        return Component;
      },
    }
  ),
}));

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
  takeRecords = jest.fn(() => []);
}

(global as any).IntersectionObserver = MockIntersectionObserver;

// Mock ResizeObserver
class MockResizeObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
}

(global as any).ResizeObserver = MockResizeObserver;

// Mock window.matchMedia
(global as any).matchMedia = jest.fn((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

// Mock scrollTo
(global as any).scrollTo = jest.fn();
