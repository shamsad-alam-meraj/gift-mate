export const addToCartHelper = (cart, product) => {
  const updatedCart = [...cart];
  const existingItem = updatedCart.find((item) => item._id === product._id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    updatedCart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  return updatedCart;
};

export const removeFromCartHelper = (cart, productId, fullRemove = false) => {
  const updatedCart = cart
    .map((item) => {
      if (item._id === productId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
    .filter((item) => item.quantity > 0 || fullRemove === false);

  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  return updatedCart;
};

export const clearCartHelper = () => {
  localStorage.removeItem("cartItems");
  return [];
};
