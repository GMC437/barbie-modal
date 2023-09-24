import { render, screen } from "@testing-library/react";
import App from "./App";

// workaround until dialog elements are supported in jest/jsdom
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = jest.fn();
  HTMLDialogElement.prototype.close = jest.fn();
});

test("renders", () => {
  render(<App />);
  const text = screen.getByText(/Let’s see a modal/i);
  expect(text).toBeInTheDocument();
});
