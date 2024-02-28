import { configureStore } from "@reduxjs/toolkit";
import AuthNavigateSlicer from "./slicer/authNavigateSlice";
import webContent from "./slicer/webContent";

const store = configureStore({
  reducer: {
    authNavigate: AuthNavigateSlicer,
    webContent: webContent,
  },
});

export default store;
