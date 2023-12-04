import { createSlice } from "@reduxjs/toolkit";
import { products } from "@/Components/data";
import cart from "@/pages/cart";

const initialState = {
  cart: [],
  cartTotalAmount: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to cart
    addtoCart: (state, action) => {
      // check if item already exists
      const itemIndex = state.cart.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        const itemToAdd = { ...action.payload, quantity: 1, discount:0 };
        state.cart.push(itemToAdd);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },

    // remove item
    removeItem: (state, action) => {
        const itemId = action.payload;
        state.cart = state.cart.filter((item) => item.productId !== itemId)
    },

    // increase item quantity
    increase: (state, action) => {
      const item = state.cart.find((item) => item.productId === action.payload.productId);
      item.quantity++;
    },

    // decrease item quantity
    decrease: (state, { payload }) => {
      const cartitem = state.cart.find((item) => item.productId === payload.productId);
      cartitem.quantity = cartitem.quantity - 1;
    },
  },
});

export const { addtoCart, clearCart, removeItem, increase, decrease } =
  cartSlice.actions;

export default cartSlice.reducer;
