import React, { useState } from "react";
import Modal from "../modal";
import "./styles.css";

const ModalContainer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <button
        className="action-button"
        onClick={() => setIsModalVisible(!isModalVisible)}
      >
        CLICK
      </button>
      <Modal
        isVisible={isModalVisible}
        onClick={() => setIsModalVisible(!isModalVisible)}
      />
    </>
  );
};

export default ModalContainer;
