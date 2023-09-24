import { render, screen } from "@testing-library/react";
import ModalContainer from "./index";

const closeButtonFn = jest.fn();
// workaround until dialog elements are supported in jest/jsdom
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = jest.fn();
  HTMLDialogElement.prototype.close = closeButtonFn;
});

describe("Modal Container", () => {
  it("renders component", () => {
    render(<ModalContainer />);

    const button = screen.getByText("CLICK");

    expect(button).toBeInTheDocument();
  });
});
