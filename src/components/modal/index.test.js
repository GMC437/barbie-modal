import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Modal from "./index";

// workaround until dialog elements are supported in jest/jsdom
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = jest.fn();
  HTMLDialogElement.prototype.close = jest.fn();
});

describe("Modal", () => {
  it("renders component", () => {
    const buttonClickFn = jest.fn();
    render(<Modal isVisible={false} onClick={buttonClickFn} />);

    const button = screen.getByText("Barbie");
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(buttonClickFn).toHaveBeenCalledTimes(1);
  });
});
