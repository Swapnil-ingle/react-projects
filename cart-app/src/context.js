import React, { useContext, useState } from "react";
import cartItems from "./data";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems);
  return <AppContext.Provider value={{ cart }}>{children}</AppContext.Provider>;
};

// Using Custom Hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
