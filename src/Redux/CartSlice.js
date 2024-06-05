import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  totalAmount:0,
  totalQuantity:0
 
};

 const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      console.log(state);
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++
   
      if (!existingItem) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
       
      } else {
        existingItem.quantity++
       
      }
     console.log(state.totalQuantity)
      console.log(state.cartItems)
      console.log(newItem)
    },
  },
});
export const { add } = CartSlice.actions;
export default CartSlice.reducer;
