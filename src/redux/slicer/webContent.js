import { createSlice } from "@reduxjs/toolkit";

const webContent = createSlice({
  name: "webcontent",
  initialState: {
    isShowModal: false,
    query: "",
    showItemSearch: false,
    page: 1,
  },
  reducers: {
    toggleModal: (state) => {
      state.isShowModal = !state.isShowModal;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setItemSearchOn: (state) => {
      state.showItemSearch = true;
    },
    setItemSearchOff: (state) => {
      state.showItemSearch = false;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    nextPage: (state) => {
      state.page = state.page + 1;
      window.scrollTo(0, 0);
    },
    prevPage: (state) => {
      state.page = state.page - 1;
      window.scrollTo(0, 0);
    },
  },
});

export const {
  toggleModal,
  setQuery,
  setItemSearchOff,
  setItemSearchOn,
  setPage,
  nextPage,
  prevPage,
} = webContent.actions;
export default webContent.reducer;
