import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from '../../../store/cart/cartSlice';
import { IQuantityButtonsProps } from './types';
import { RootState } from '../../../store/store';
import './styles.css';

const QuantityButtons = ({ item }: IQuantityButtonsProps) => {
  const cartState = useSelector((state: RootState) => state.cart);
  const itemFromCartState = cartState.items.filter(
    cartItem => cartItem.id === item.id,
  )[0];
  const dispatch = useDispatch();
  return (
    <div className='item-quantity-container'>
      <button onClick={() => dispatch(decreaseCartItemQuantity(item))}>
        -
      </button>
      <p className='item-quantity-text'>{itemFromCartState?.quantity ?? 0}</p>
      <button onClick={() => dispatch(increaseCartItemQuantity(item))}>
        +
      </button>
    </div>
  );
};

export default QuantityButtons;
