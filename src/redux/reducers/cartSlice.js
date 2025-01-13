import { createSlice } from "@reduxjs/toolkit";
import {
  addToCartHelper,
  removeFromCartHelper,
  clearCartHelper,
} from "@/helpers/helpers";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = addToCartHelper(state.items, action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = removeFromCartHelper(
        state.items,
        action.payload._id,
        action.payload.fullRemove || false
      );
    },
    clearCart: (state) => {
      state.items = clearCartHelper();
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
