import { combineReducers } from "redux";
import  userSlice from "@/redux/reducers/userSlice";
import productSlice from "@/redux/reducers/productSlice";
// Combine all reducers
export const rootReducer = combineReducers({
    user: userSlice,
    product: productSlice,
  });