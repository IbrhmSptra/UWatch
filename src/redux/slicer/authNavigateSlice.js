import { createSlice } from "@reduxjs/toolkit";

const authNavigateSlicer = createSlice({
  name: "isLogin",
  initialState: {
    pageLogin: true,
    errorAuth: "",
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
  },
});
export const { togglePage, setError, cleanError } = authNavigateSlicer.actions;
export default authNavigateSlicer.reducer;
