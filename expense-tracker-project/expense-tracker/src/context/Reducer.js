const reducer = (state, action) => {
  let newTransactions;
  let newTransaction;

  switch (action.type) {
    case "ADD_TRANSACTION":
      newTransaction = action.payload;
      newTransactions = [newTransaction, ...state.transactions];

      return {
        ...state,
        transactions: newTransactions,
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
