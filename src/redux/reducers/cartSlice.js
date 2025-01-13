import { clearCartHelper } from "@/helpers/helpers";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        // Update the quantity if the item already exists
        existingItem.quantity += action.payload.quantity || 1;
        addToCart(...state.items, existingItem);
      } else {
        // Add the new item
        state.items.push({ ...action.payload, quantity: 1 });
        addToCart(...state.items, action.payload);
      }
    },
    removeFromCart: (state, action) => {
      // Remove item if quantity is <= 1; otherwise decrement the quantity
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
          removeFromCart(
            ...state.items,
            (state.items[itemIndex].quantity -= 1)
          );
        } else {
          state.items.splice(itemIndex, 1);
          removeFromCart(...state.items, state.items.splice(itemIndex, 1));
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      clearCartHelper();
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
