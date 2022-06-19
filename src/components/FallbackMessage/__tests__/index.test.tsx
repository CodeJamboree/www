import FallbackMessage from "../index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("FallbackMessage", () => {
  describe(".message", () => {
    it("renders default", async () => {
      const { container } = render(<FallbackMessage />);
      expect(container.children).toMatchInlineSnapshot(`HTMLCollection []`);
    });
    it("renders string", async () => {
      const { getByText } = render(<FallbackMessage message="Test Message" />);
      expect(getByText("Test Message")).toBeInTheDocument();
    });
  });
});
