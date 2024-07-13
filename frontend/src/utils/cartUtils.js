export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // Calculate shipping price | If items price is greater than 60, shipping is free | If not, shipping is 4,99
  state.shippingPrice = addDecimals(state.itemsPrice > 60 ? 0 : 4.99);

  // Calculate tax price | Tax is 19% of the items price
  state.taxPrice = addDecimals(
    Number((0.19 * state.itemsPrice).toFixed(2))
  );
  // Calculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  // Save the cart to localStorage
  localStorage.setItem('cart', JSON.stringify(state));

  return state;
}