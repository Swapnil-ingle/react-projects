import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";

const Home = () => {
  const sidebarRef = useRef("");

  const sidebarToggle = () => {
    sidebarRef.current.classList.toggle("hide");
  };

  return (
    <>
      <main>
        <div className="sidebar-toggle" ref={sidebarRef}>
          <button onClick={sidebarToggle}>
            <FaBars />
          </button>
        </div>
        <Modal />
      </main>
    </>
  );
};

export default Home;
