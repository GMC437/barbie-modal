import { renderHook } from "@testing-library/react";
import { useIsModalVisible } from "./index";

describe("useIsModalVisible", () => {
  it("renders hook to dialog close function to be called", () => {
    const closeFn = jest.fn();
    const showModalFn = jest.fn();

    const ref = {
      current: { close: closeFn, showModal: showModalFn },
    };

    renderHook(() => useIsModalVisible(ref, false));

    expect(closeFn).toHaveBeenCalledTimes(1);
  });

  it("renders hook to dialog showModal function to be called", () => {
    const closeFn = jest.fn();
    const showModalFn = jest.fn();

    const ref = {
      current: { close: closeFn, showModal: showModalFn },
    };

    renderHook(() => useIsModalVisible(ref, true));

    expect(showModalFn).toHaveBeenCalledTimes(1);
  });
});
