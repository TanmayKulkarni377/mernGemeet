export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

export const updateCart = (state) => {
     //   Calculate Items price
     state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      //   Calculate shipping price (if order is over Rs.1000 then free, else Rs.100 Shipping)
      state.shippingPrice = addDecimals(state.itemsPrice > 1000 ? 0 : 100);

      //   Calculate tax price( 15% tax)
      state.taxPrice = addDecimals(
        Number((0.15 * state.itemsPrice).toFixed(2))
      );

      //   Calculate total price
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);
      localStorage.setItem('cart', JSON.stringify(state));
      return state;
}