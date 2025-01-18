import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  hotDealsProducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    setHotDealsProducts: (state, action) => {
      state.hotDealsProducts = action.payload;
    },
  },
});

export const { setProducts, addProduct, setHotDealsProducts } =
  productSlice.actions;

export default productSlice.reducer;
