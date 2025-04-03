import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const loadProductFromLocalStorage = (id) => {
  const product = localStorage.getItem(`product_${id}`);
  return product ? JSON.parse(product) : null;
};

export const fetchProductDetails = createAsyncThunk(
  "productDetails/fetchProductDetails",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    localStorage.setItem(`product_${id}`, JSON.stringify(data)); 
    return data;
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    productDetails: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productDetailsSlice.reducer;
