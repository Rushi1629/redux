import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],   // store items as objects
    totalQty: 0, // badge count
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("Add to cart clicked");
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }

      state.totalQty += 1;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        state.totalQty -= item.qty;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.qty += 1;
      state.totalQty += 1;
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item.qty === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        item.qty -= 1;
      }

      state.totalQty -= 1;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQty = 0;
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
