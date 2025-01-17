import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartInitialState, ICartItem } from './types';

const initialState: CartInitialState = {
  items: [],
  totalCartQuantity: 0,
  totalCartPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: state => {
      state = initialState;
    },
    addCartItem: (state, action: PayloadAction<ICartItem>) => {
      const { quantity, price, priceWithDiscount } = action.payload;
      state.items = [...state.items, action.payload];
      state.totalCartQuantity += quantity;
      state.totalCartPrice += priceWithDiscount ?? price;
    },
    increaseCartItemQuantity: (state, action: PayloadAction<ICartItem>) => {
      const { id, price, priceWithDiscount } = action.payload;
      const updateItemQuantity = state.items.map(item => {
        if (item.id === id) {
          item.quantity += 1;
          state.totalCartQuantity += 1;
          state.totalCartPrice += priceWithDiscount ?? price;
        }
        return item;
      });
      state.items = updateItemQuantity;
    },
    decreaseCartItemQuantity: (state, action: PayloadAction<ICartItem>) => {
      const { id, price, priceWithDiscount } = action.payload;
      const indexOfItemToBeUpdated = state.items.findIndex(
        item => item.id === id,
      );
      const itemToBeUpdated = state.items[indexOfItemToBeUpdated];
      state.totalCartQuantity -= 1;
      state.totalCartPrice -= priceWithDiscount ?? price;

      if (itemToBeUpdated && itemToBeUpdated.quantity - 1 === 0) {
        const cartWithoutItem = state.items.filter(item => item.id !== id);
        state.items = cartWithoutItem;
      } else {
        const updateItemQuantity = state.items.map(item => {
          if (item.id === id) {
            item.quantity -= 1;
          }
          return item;
        });
        state.items = updateItemQuantity;
      }
    },
  },
});

export const {
  reset,
  addCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
