import { useEffect } from "react";

export const useIsModalVisible = (ref, isVisible) => {
  useEffect(() => {
    if (isVisible) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isVisible, ref]);
};
