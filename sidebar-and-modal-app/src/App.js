import "./App.css";
import Home from "./Home";
import React from "react";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
