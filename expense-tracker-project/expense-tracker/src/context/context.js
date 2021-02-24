import React, { useContext, useReducer } from "react";
import { reducer } from "./Reducer";

const initialState = {
  transactions: [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 50,
      date: "21 Feb 2021",
    },
    {
      id: 2,
      type: "Expense",
      category: "Pets",
      amount: 120,
      date: "20 Feb 2021",
    },
    {
      id: 3,
      type: "Income",
      category: "Business",
      amount: 20,
      date: "14 Feb 2021",
    },
  ],
};
const AppContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action Creators
  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });

  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  return (
    <AppContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
