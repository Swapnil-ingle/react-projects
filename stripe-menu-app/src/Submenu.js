import React, { useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen } = useGlobalContext();

  return (
    <aside className={`submenu ${isSubmenuOpen && "show"}`}>submenu</aside>
  );
};

export default Submenu;
