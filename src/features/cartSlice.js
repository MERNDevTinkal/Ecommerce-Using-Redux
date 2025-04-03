import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cartItems");
  return cart ? JSON.parse(cart) : {};
};

const initialState = {
  cartItems: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      if (state.cartItems[product.id]) {
        state.cartItems[product.id].quantity += 1;
      } else {
        state.cartItems[product.id] = { ...product, quantity: 1 };
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); 
    },

    removeFromCart: (state, action) => {
      delete state.cartItems[action.payload];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); 
    },

    incrementQuantity: (state, action) => {
      if (state.cartItems[action.payload]) {
        state.cartItems[action.payload].quantity += 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); 
    },

    decrementQuantity: (state, action) => {
      if (state.cartItems[action.payload] && state.cartItems[action.payload].quantity > 1) {
        state.cartItems[action.payload].quantity -= 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); 
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
