import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";

const Sidebar = ({ setExpandModalContainer }) => {
  const sidebarRef = useRef("");
  const sidebarToggle = () => {
    sidebarRef.current.classList.toggle("hide");
    setExpandModalContainer(true);
  };

  return (
    <div className="sidebar-toggle" ref={sidebarRef}>
      <button onClick={sidebarToggle}>
        <FaBars />
      </button>
    </div>
  );
};

export default Sidebar;
