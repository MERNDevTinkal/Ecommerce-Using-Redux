import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/ProductSlice";
import searchAndDropdownReducer from "../features/SearchAndDropdownSlice";
import cartReducer from "../features/cartSlice";
import productDetailsReducer from "../features/productDetailsSlice"; 

export const store = configureStore({
  reducer: {
    products: productReducer,
    searchAndDropdown: searchAndDropdownReducer,
    cart: cartReducer,
    productDetails: productDetailsReducer, 
  },
});
