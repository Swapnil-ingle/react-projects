import React, { useRef } from "react";
import { FaWindowClose } from "react-icons/fa";

const Modal = () => {
  const modalContainerRef = useRef("");

  const hideModalContainer = () => {
    modalContainerRef.current.classList.toggle("hide-modal-container");
  };

  return (
    <div className="show-modal-container">
      <div
        className="modal-container hide-modal-container"
        ref={modalContainerRef}
      >
        <button onClick={hideModalContainer}>
          <FaWindowClose />
        </button>
        <h2>Modal Content</h2>
      </div>
      <button className="btn" onClick={hideModalContainer}>
        Show Modal
      </button>
    </div>
  );
};

export default Modal;
