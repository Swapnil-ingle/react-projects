import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const sidebarRef = useRef("");
  const { toggleSidebar } = useGlobalContext();

  const sidebarToggle = () => {
    sidebarRef.current.classList.toggle("hide");
    toggleSidebar();
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
