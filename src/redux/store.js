import { configureStore } from "@reduxjs/toolkit";
import AuthNavigateSlicer from "./slicer/authNavigateSlice";

const store = configureStore({
  reducer: {
    authNavigate: AuthNavigateSlicer,
  },
});

export default store;
