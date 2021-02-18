const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      var id = action.payload;
      var newCart = state.cart.filter((item) => item.id !== id);
      return { ...state, cart: newCart };
    case "INCREASE":
      var id = action.payload;
      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: tempCart };
    default:
      console.log("Default reducer call...");
      return state;
  }
};

export default reducer;
