import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartInitialState, ICartItem } from './types';

const initialState: CartInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: state => {
      state = initialState;
    },
    addCartItem: (state, action: PayloadAction<ICartItem>) => {
      state.items = [...state.items, action.payload];
      console.log('%c⧭addCartItem', 'color: #917399', state.items);
    },
    updateCartItemQuantity: (state, action: PayloadAction<ICartItem>) => {
      const { id, quantity } = action.payload;
      if (quantity === 0) {
        const cartWithoutItem = state.items.filter(item => item.id !== id);
        state.items = cartWithoutItem;
      } else {
        const updateItemQuantity = state.items.map(item => {
          if (item.id === id) {
            item.quantity += quantity;
          }
          return item;
        });
        state.items = updateItemQuantity;
        console.log('%c⧭ updateItem', 'color: #d90000', state.items);
      }
    },
  },
});

export const { reset, addCartItem, updateCartItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
