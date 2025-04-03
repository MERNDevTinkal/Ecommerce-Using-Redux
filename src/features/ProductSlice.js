import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  });


export const productSlice  = createSlice({

    name: 'products', 

  initialState: {

    items : [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
   
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true; // Jab tak API fetch ho rahi hai, loading true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // API ka data items me store ho jayega
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Data fetch failed"; // Agar API fail ho jaye
      });
  },
}); 



export default productSlice.reducer