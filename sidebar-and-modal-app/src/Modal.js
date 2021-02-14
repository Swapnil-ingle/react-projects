import React, { useRef, useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isSidebarOpen } = useGlobalContext();
  const modalContainerRef = useRef("");
  const showModalContainerRef = useRef("");

  useEffect(() => {
    if (isSidebarOpen) {
      showModalContainerRef.current.classList.add(
        "show-modal-container-expand"
      );
    } else {
      showModalContainerRef.current.classList.remove(
        "show-modal-container-expand"
      );
    }
  }, [isSidebarOpen]);

  const hideModalContainer = () => {
    modalContainerRef.current.classList.toggle("hide-modal-container");
  };

  return (
    <>
      <div className="show-modal-container" ref={showModalContainerRef}>
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
    </>
  );
};

export default Modal;
