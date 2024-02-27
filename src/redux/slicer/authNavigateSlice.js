import { createSlice } from "@reduxjs/toolkit";

const authNavigateSlicer = createSlice({
  name: "isLogin",
  initialState: {
    pageLogin: true,
    errorAuth: "",
    user: null,
  },
  reducers: {
    togglePage: (state) => {
      state.pageLogin = !state.pageLogin;
    },
    setError: (state, action) => {
      state.errorAuth = action.payload;
    },
    cleanError: (state) => {
      state.errorAuth = "";
    },
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { togglePage, setError, cleanError, login, logout } =
  authNavigateSlicer.actions;
export default authNavigateSlicer.reducer;
