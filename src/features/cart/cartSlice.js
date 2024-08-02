import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

  //   cart: [
  //     {
  //       id: 1,
  //       name: "Margarita",
  //       unitPrice: 12,
  //       quantity: 2,
  //     },
  //   ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      const itemId = action.payload;

      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
    increaseItemQuantity(state, action) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload,
      );

      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decreaseItemQuantity(state, action) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload,
      );

      if (existingItem.quantity === 1)
        cartSlice.caseReducers.removeItem(state, action);

      if (existingItem) {
        existingItem.quantity--;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
