const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      var id = action.payload;
      var newCart = state.cart.filter((item) => item.id !== id);
      return { ...state, cart: newCart };
    case "CHANGE_AMOUNT":
      var id = action.payload.id;
      var type = action.payload.type;

      var tempCart = state.cart
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              amount: type === "INCREASE" ? item.amount + 1 : item.amount - 1,
            };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);

      return { ...state, cart: tempCart };
    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.amount += amount;
          cartTotal.total += itemTotal;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    case "LOADING":
      return { ...state, loading: true };
    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };
    default:
      console.log("Default reducer call...");
      return state;
  }
};

export default reducer;
