import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQty: 0,
    totalAmount: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const price = Number(product.price);
      
      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }

      state.totalQty += 1;
      state.totalAmount += product.price; // ✅ FIX
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        state.totalQty -= item.qty;
        state.totalAmount -= item.price * item.qty; // ✅ FIX
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.qty += 1;
        state.totalQty += 1;
        state.totalAmount += item.price; // ✅ FIX
      }
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (!item) return;

      item.qty -= 1;
      state.totalQty -= 1;
      state.totalAmount -= item.price; // ✅ FIX

      if (item.qty === 0) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQty = 0;
      state.totalAmount = 0; // ✅ FIX
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
