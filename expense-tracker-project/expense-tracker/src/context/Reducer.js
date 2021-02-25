const reducer = (state, action) => {
  let newTransactions;
  let newTotalIncome;
  let newTotalExpense;
  let newTransaction;

  switch (action.type) {
    case "ADD_TRANSACTION":
      newTransaction = action.payload;

      newTransaction = {
        ...newTransaction,
        id: new Date().getTime().toString(),
      };

      newTransactions = [newTransaction, ...state.transactions];

      newTotalIncome = state.totalIncome;
      newTotalExpense = state.totalExpense;

      if (newTransaction.type === "Income") {
        newTotalIncome = state.totalIncome + parseInt(newTransaction.amount);
      } else {
        newTotalExpense = state.totalExpense + parseInt(newTransaction.amount);
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
