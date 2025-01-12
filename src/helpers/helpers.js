export const addToCartHelper = (cart, product) => {
  const cartCopy = [...cart];
  const existingItem = cartCopy.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartCopy.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cartItems", JSON.stringify(cartCopy));
  return cartCopy;
};

export const removeFromCartHelper = (cart, product) => {
  const cartCopy = cart
    .map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
    .filter((item) => item.quantity > 0);

  localStorage.setItem("cartItems", JSON.stringify(cartCopy));
  return cartCopy;
};

export const clearCartHelper = () => {
  localStorage.removeItem("cartItems");
  return [];
};
