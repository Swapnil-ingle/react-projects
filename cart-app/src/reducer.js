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
      var item = state.cart.filter((item) => item.id === id);
      item.amount += 1;
      var newCart = [state.cart.filter((item) => item.id !== id), item];
      return { ...state, cart: newCart };
    default:
      console.log("Default reducer call...");
      return state;
  }
};

export default reducer;
