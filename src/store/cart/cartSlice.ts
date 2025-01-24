import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartInitialState, ICartItem } from './types';
import { getFromLS, save } from '../../utils/localStorage';

const initialState: CartInitialState = {
  items: JSON.parse(getFromLS('cart-items') ?? '[]'),
  totalCartQuantity: JSON.parse(getFromLS('totalCartQuantity') ?? '0'),
  totalCartPrice: JSON.parse(getFromLS('totalCartPrice') ?? '0'),
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
      save('cart-items', JSON.stringify(state.items));

      state.totalCartQuantity += quantity;
      save('totalCartQuantity', state.totalCartQuantity.toString());

      state.totalCartPrice += priceWithDiscount ?? price;
      save('totalCartPrice', state.totalCartPrice.toString());
    },
    increaseCartItemQuantity: (state, action: PayloadAction<ICartItem>) => {
      const { id, price, priceWithDiscount } = action.payload;
      const updateItemQuantity = state.items.map(item => {
        if (item.id === id) {
          item.quantity += 1;
          state.totalCartQuantity += 1;
          save('totalCartQuantity', state.totalCartQuantity.toString());

          state.totalCartPrice += priceWithDiscount ?? price;
          save('totalCartPrice', state.totalCartPrice.toString());
        }
        return item;
      });
      state.items = updateItemQuantity;
      save('cart-items', JSON.stringify(state.items));
    },
    decreaseCartItemQuantity: (state, action: PayloadAction<ICartItem>) => {
      const { id, price, priceWithDiscount } = action.payload;
      const indexOfItemToBeUpdated = state.items.findIndex(
        item => item.id === id,
      );
      const itemToBeUpdated = state.items[indexOfItemToBeUpdated];
      state.totalCartQuantity -= 1;
      save('totalCartQuantity', state.totalCartQuantity.toString());

      state.totalCartPrice -= priceWithDiscount ?? price;
      save('totalCartPrice', state.totalCartPrice.toString());

      if (itemToBeUpdated && itemToBeUpdated.quantity - 1 === 0) {
        const cartWithoutItem = state.items.filter(item => item.id !== id);
        state.items = cartWithoutItem;
        save('cart-items', JSON.stringify(cartWithoutItem));
      } else {
        const updateItemQuantity = state.items.map(item => {
          if (item.id === id) {
            item.quantity -= 1;
          }
          return item;
        });
        state.items = updateItemQuantity;
        save('cart-items', JSON.stringify(updateItemQuantity));
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
