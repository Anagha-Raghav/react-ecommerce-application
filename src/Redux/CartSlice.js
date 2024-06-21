import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Add to cart
    add(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
    },

    //Remove Cart
    removeCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
    },
    //increment quantity
    incrementQuantity(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      state.totalQuantity++;
      existingItem.quantity++;
    },
    //decrement quantity
    decrementQuantity(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      } else {
        existingItem.quantity--;
      }
    },
  },
});
export const { add, removeCart, incrementQuantity, decrementQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
