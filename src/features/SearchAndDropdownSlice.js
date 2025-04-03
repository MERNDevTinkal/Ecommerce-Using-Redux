import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "searchAndDropdown/fetchCategories",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return response.data;
  }
);

export const searchAndDropdownSlice = createSlice({
  name: "searchAndDropdown",
  initialState: {
    categories: [],
    selectedCategory: "all",
    searchQuery: "",
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { setCategory, setSearchQuery } = searchAndDropdownSlice.actions;


export default searchAndDropdownSlice.reducer;
