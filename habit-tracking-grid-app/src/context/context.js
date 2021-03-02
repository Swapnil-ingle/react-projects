import { useContext, useReducer } from "react";
import React from "react";
import { reducer } from "./reducer";

const initialState = {
  trackedHabits: [
    {
      id: 1,
      name: "React",
      startDate: "2021-03-02",
      doneTasksOn: ["2021-03-02"],
    },
    {
      id: 2,
      name: "Gym",
      startDate: "2021-03-02",
      doneTasksOn: ["2021-03-02"],
    },
  ],
};

// Create a context
const AppContext = React.createContext(initialState);

// Wrap a AppProvider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ trackedHabits: state.trackedHabits }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
