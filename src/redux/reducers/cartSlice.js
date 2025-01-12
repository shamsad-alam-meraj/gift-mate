import {
  addToCartHelper,
  clearCartHelper,
  removeFromCartHelper,
} from "@/helpers/helpers";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const updatedCart = addToCartHelper(state.items, action.payload);
      state.items = updatedCart;
    },
    removeFromCart: (state, action) => {
      const updatedCart = removeFromCartHelper(state.items, action.payload);
      state.items = updatedCart;
    },
    clearCart: (state) => {
      state.items = clearCartHelper();
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
