import { createSlice } from "@reduxjs/toolkit";
import { sliceItems } from "../utils/helper";

const initialState = {
  items: [],
  categories: [],
  slicedItems: [],
  isLoading: false,
  initialized: false,
  error: "",
};
export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setItemsError: (state, action) => {
      state.error = action.payload;
    },
    setSlicedItems: (state, action) => {
      state.slicedItems = action.payload;
    },
    setItemsCategory: (state, action) => {
      state.categories = action.payload;
    },
    findBySearch: (state, action) => {
      const text = action.payload;
      const filtererBySearch = state.items.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      state.slicedItems = sliceItems(filtererBySearch);
    },
    toggleLoader: (state, action) => {
      state.isLoading = action.payload;
    },
    initializedApp: (state) => {
      state.initialized = true;
    },
  },
});

export const {
  setItems,
  setItemsCategory,
  setSlicedItems,
  findBySearch,
  toggleLoader,
  initializedApp,
  setItemsError,
} = itemsSlice.actions;

export default itemsSlice.reducer;
