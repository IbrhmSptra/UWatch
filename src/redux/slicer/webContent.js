import { createSlice } from "@reduxjs/toolkit";

const webContent = createSlice({
  name: "webcontent",
  initialState: {
    isShowModal: false,
  },
  reducers: {
    toggleModal: (state) => {
      state.isShowModal = !state.isShowModal;
    },
  },
});

export const { toggleModal } = webContent.actions;
export default webContent.reducer;
