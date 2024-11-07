import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addtoCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.find(cartItem => cartItem.id === item.id);
     
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },

    removetoCart: (state, action) => {
      const item = action.payload;
      const index = state.findIndex(cartItem => cartItem.id === item.id);
      
      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
        } else {
          // Remove the item entirely if quantity is 1
          state.splice(index, 1);
        }
      }
    },

    deleteAll: (state) => {
      return [];
    }
    
  }
})

export const { addtoCart, removetoCart, deleteAll } = CartSlice.actions;
export default CartSlice.reducer;