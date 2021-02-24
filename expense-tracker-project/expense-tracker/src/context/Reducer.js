const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      console.log("Adding transaction...");
      return { ...state };
    case "DELETE_TRANSACTION":
      console.log("Deleting Transaction...");
      const newTransactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
      return { ...state, transactions: newTransactions };
    default:
      console.log("No action type matched!");
      break;
  }
};

export { reducer };
