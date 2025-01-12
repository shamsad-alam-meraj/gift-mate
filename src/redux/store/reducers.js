import { combineReducers } from "redux";
import  userSlice from "@/redux/reducers/userSlice";
import productSlice from "@/redux/reducers/productSlice";
import cartSlice from "@/redux/reducers/cartSlice";

// Combine all reducers
export const rootReducer = combineReducers({
    user: userSlice,
    product: productSlice,
    cart: cartSlice
  });