const reducer = (state, action) => {
  let newTransactions;
  let newTransaction;

  switch (action.type) {
    case "ADD_TRANSACTION":
      newTransaction = action.payload;
      newTransactions = [newTransaction, ...state.transactions];

      let newTotalIncome = state.totalIncome;
      let newTotalExpense = state.totalExpense;

      if (newTransaction.type === "Income") {
        newTotalIncome = state.totalIncome + newTransaction.amount;
      } else {
        newTotalExpense = state.totalExpense + newTransaction.amount;
      }

      return {
        ...state,
        transactions: newTransactions,
        totalIncome: newTotalIncome,
        totalExpense: newTotalExpense,
      };
    case "DELETE_TRANSACTION":
      newTransactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );

      return {
        ...state,
        transactions: newTransactions,
      };
    default:
      console.log("No action type matched!");
      break;
  }
};

export { reducer };
