import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from '../../../store/cart/cartSlice';
import { IQuantityButtonsProps } from './types';
import { RootState } from '../../../store/store';
import TrashIcon from '../../../assets/icons/trash.svg';
import MinusIcon from '../../../assets/icons/minus.svg';
import AddIcon from '../../../assets/icons/add.svg';
import './styles.css';

const QuantityButtons = ({ item }: IQuantityButtonsProps) => {
  const cartState = useSelector((state: RootState) => state.cart);
  const itemFromCartState = cartState.items.filter(
    cartItem => cartItem.id === item.id,
  )[0];
  const dispatch = useDispatch();
  return (
    <div className='item-quantity-container'>
      <button
        onClick={() => dispatch(decreaseCartItemQuantity(item))}
        style={{
          display: 'flex',
          justifyItems: 'center',
        }}
      >
        <img
          src={itemFromCartState?.quantity === 1 ? TrashIcon : MinusIcon}
          alt='remove icon'
          width={15}
          height={15}
          style={{ padding: 0 }}
        />
      </button>
      <p className='item-quantity-text'>{itemFromCartState?.quantity ?? 0}</p>
      <button
        onClick={() => dispatch(increaseCartItemQuantity(item))}
        style={{
          display: 'flex',
          justifyItems: 'center',
        }}
      >
        <img
          src={AddIcon}
          alt='add icon'
          width={15}
          height={15}
          style={{ padding: 0 }}
        />
      </button>
    </div>
  );
};

export default QuantityButtons;
