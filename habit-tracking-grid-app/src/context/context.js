import { useContext, useReducer } from "react";
import React from "react";
import { reducer } from "./reducer";

const initialState = {
  habits: [
    {
      id: 1,
      name: "React",
      description: "Do some progress on React at least 30 mins everyday",
      startDate: "2021-03-01",
      doneTasksOn: ["2021-03-02"],
    },
    {
      id: 2,
      name: "Gym",
      description: "Workout till you hit at least 250 kCal everyday",
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

  const addNewHabit = (habit) => {
    dispatch({ type: "ADD_NEW_HABIT", payload: habit });
  };

  return (
    <AppContext.Provider
      value={{ habits: state.habits, toggleToday, addNewHabit }}
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
