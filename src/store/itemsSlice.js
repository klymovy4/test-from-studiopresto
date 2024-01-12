import { createSlice } from "@reduxjs/toolkit";
import {sliceItems} from '../utils/helper'

const initialState = {
  items: [],
  categories: [],
  slicedItems: [],
};
export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setSlicedItems: (state, action) => {
      state.slicedItems = action.payload;
    },
    setItemsCategory: (state, action) => {
      state.categories = action.payload;
    },
    getSpetialCategory: (state, action) => {
      console.log(action.payload);
    },
    findBySearch: (state, action) => {
      const text = action.payload;
      const filtererBySearch = state.items.filter(item => item.title.toLowerCase().includes(text.toLowerCase())) 
      state.slicedItems = sliceItems(filtererBySearch);  
    },
  },
});

export const {
  setItems,
  setItemsCategory,
  getSpetialCategory,
  setSlicedItems,
  findBySearch,
} = itemsSlice.actions;

export default itemsSlice.reducer;
