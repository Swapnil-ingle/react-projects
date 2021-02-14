import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { links } from "./data";

const Sidebar = () => {
  const sidebarRef = useRef("");
  const { toggleSidebar, isSidebarOpen } = useGlobalContext();

  const sidebarToggle = () => {
    sidebarRef.current.classList.toggle("hide");
    toggleSidebar();
  };

  return (
    <div className="sidebar-toggle" ref={sidebarRef}>
      <button onClick={sidebarToggle}>
        <FaBars />
      </button>
      {isSidebarOpen && (
        <div className="sidebar-links">
          {links.map((link) => {
            return (
              <section key={link.id}>
                <a href={link.url}>
                  <h2>{link.icon} </h2>
                  <h3>{link.name}</h3>
                </a>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
