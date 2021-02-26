import React, { useContext, useReducer, useEffect } from "react";
import { Reducer } from "./Reducer";
import { getFromLocalStorage } from "../utils/localStorage";

const initialState = {
  transactions: [],
};

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    const locallyStoredTransactions = getFromLocalStorage("transactions");

    if (locallyStoredTransactions) {
      dispatch({
        type: "INIT_TRANSACTIONS",
        payload: locallyStoredTransactions,
      });
    }
  }, []);

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
