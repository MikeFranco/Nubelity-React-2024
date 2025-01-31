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

const QuantityButtons = ({ item, className }: IQuantityButtonsProps) => {
  const cartState = useSelector((state: RootState) => state.cart);
  const itemFromCartState = cartState.items.filter(
    cartItem => cartItem.id === item.id,
  )[0];
  const dispatch = useDispatch();
  return (
    <div className={`item-quantity-container ${className}`}>
      <button
        onClick={() => dispatch(decreaseCartItemQuantity(item))}
        className='button button-minus'
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
        className='button button-add'
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
