import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  email: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.email = "";
      state.isLoggedIn = false;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { login, logout, setData } = userSlice.actions;

export default userSlice.reducer;
