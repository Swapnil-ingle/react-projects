import { saveToLocalStorage } from "../utils/localStorage";

const Reducer = (state, action) => {
  let newTransactions;
  let newTransaction;

  switch (action.type) {
    case "INIT_TRANSACTIONS":
      return { ...state, transactions: action.payload };
    case "ADD_TRANSACTION":
      newTransaction = action.payload;
      const total = state.transaction.reduce(
        (acc, currVal) =>
          (acc += currVal.type === "Income" ? currVal.amount : 0),
        0
      );
      if (newTransaction.type === "Expense" && total < newTransaction.amount) {
        alert("Not enought balance, add sufficient Income!");
      }
      newTransactions = [newTransaction, ...state.transactions];

      saveToLocalStorage("transactions", newTransactions);

      return {
        ...state,
        transactions: newTransactions,
      };
    case "DELETE_TRANSACTION":
      newTransactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );

      saveToLocalStorage("transactions", newTransactions);

      return {
        ...state,
        transactions: newTransactions,
      };
    default:
      console.log("No action type matched!");
      break;
  }
};

export { Reducer };
