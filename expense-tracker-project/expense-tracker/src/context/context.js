import React, { useContext, useReducer } from "react";
import { reducer } from "./Reducer";

const initialState = {
  transactions: [],
  totalIncome: 0,
  totalExpense: 0,
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
        totalIncome: state.totalIncome,
        totalExpense: state.totalExpense,
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
