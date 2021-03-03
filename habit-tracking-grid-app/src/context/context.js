import { useContext, useReducer } from "react";
import React from "react";
import { reducer } from "./reducer";

const initialState = {
  trackedHabits: [
    {
      id: 1,
      name: "React",
      startDate: "2021-03-01",
      doneTasksOn: ["2021-03-02"],
    },
    {
      id: 2,
      name: "Gym",
      startDate: "2021-03-01",
      doneTasksOn: ["2021-03-01"],
    },
  ],
};

// Create a context
const AppContext = React.createContext(initialState);

// Wrap a AppProvider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleToday = (id) => {
    dispatch({ type: "TOGGLE_TODAY", payload: id });
  };

  return (
    <AppContext.Provider
      value={{ trackedHabits: state.trackedHabits, toggleToday }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
