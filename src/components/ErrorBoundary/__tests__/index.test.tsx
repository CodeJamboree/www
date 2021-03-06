import ErrorBoundary from "../index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ErrorBoundary", () => {
  describe("without error", () => {
    describe(".children", () => {
      it("renders element", async () => {
        const { container } = render(
          <ErrorBoundary>
            <div>Test Element</div>
          </ErrorBoundary>
        );
        expect(container.children).toMatchInlineSnapshot(`
    HTMLCollection [
      <div>
        Test Element
      </div>,
    ]
    `);
      });
      it("renders string", async () => {
        const { getByText } = render(
          <ErrorBoundary>test string</ErrorBoundary>
        );
        expect(getByText("test string")).toBeInTheDocument();
      });
    });
  });
  describe("with error", () => {
    let originalConsoleError: { (...args: any[]): void };
    const mockError = new Error("Test Failure");
    const FailingComponent = () => {
      throw mockError;
    };
    beforeAll(() => {
      originalConsoleError = global.console.error;
      global.console.error = jest.fn().mockImplementation((...args) => {
        const [arg1] = args;
        if (typeof arg1 === "string" && arg1.includes("<FailingComponent>"))
          return;
        if (
          typeof arg1 === "object" &&
          arg1?.detail?.message === "Test Failure"
        )
          return;
        // unexpected error - let it go through
        originalConsoleError.call(global.console, ...args);
      });
    });
    afterAll(() => {
      global.console.error = originalConsoleError;
    });
    describe(".fallback", () => {
      it("renders default", () => {
        const { getByText } = render(
          <ErrorBoundary>
            <FailingComponent />
          </ErrorBoundary>
        );
        expect(getByText("Error")).toBeInTheDocument();
      });
      it("renders string", () => {
        const { getByText } = render(
          <ErrorBoundary fallback="test fallback">
            <FailingComponent />
          </ErrorBoundary>
        );
        expect(getByText("test fallback")).toBeInTheDocument();
      });
      it("renders element", () => {
        const { container } = render(
          <ErrorBoundary fallback={<div>Test Element</div>}>
            <FailingComponent />
          </ErrorBoundary>
        );
        expect(container.children).toMatchInlineSnapshot(`
    HTMLCollection [
      <div>
        Test Element
      </div>,
    ]
    `);
      });
    });
    describe(".onError", () => {
      it("is called", () => {
        const onError = jest.fn();
        render(
          <ErrorBoundary onError={onError}>
            <FailingComponent />
          </ErrorBoundary>
        );
        expect(onError).toHaveBeenCalledWith(
          expect.any(Error),
          expect.any(Object)
        );
      });
    });
  });
});
