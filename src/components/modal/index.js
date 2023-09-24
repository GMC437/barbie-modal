import React, { useRef } from "react";
import { useIsModalVisible } from "./use-is-modal-visible";
import "./styles.css";

const Modal = ({ isVisible, onClick }) => {
  const ref = useRef(null);
  useIsModalVisible(ref, isVisible);

  const modalClick = (message) => {
    console.log(message);
    onClick();
  };

  return (
    <dialog ref={ref} className="modal-content" onCancel={onClick}>
      <div className="modal-sub-border">
        <h3>Yeah space!</h3>

        <p>Just beach</p>

        <div>
          <button
            className="modal-button"
            onClick={() => modalClick("Hey Barbie!")}
          >
            Barbie
          </button>
          <button
            className="modal-button"
            onClick={() => modalClick("I'm just Ken")}
          >
            Ken
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
