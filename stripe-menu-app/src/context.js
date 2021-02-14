import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  <AppContext.Provider value={{ sublinks }}>{children}</AppContext.Provider>;
};

// Custom Hook
export const useGlobalContext = () => {
  return useContext(contextValue);
};

export { AppContext, AppProvider };
