import React from 'react';

import './styles.css';
import { formatNumberToMoney } from '../../../utils/formatters';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCartItem,
  updateCartItemQuantity,
} from '../../../store/cart/cartSlice';
import { ICartItem } from '../../../store/cart/types';
import { RootState } from '../../../store/store';

const ProductCard = (product: ICartItem) => {
  const cartState = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    const existingIndex = cartState.items.findIndex(
      item => item.id === product.id,
    );
    if (existingIndex !== -1) {
      dispatch(updateCartItemQuantity(product));
    } else dispatch(addCartItem(product));
  };

  return (
    <div className='product-card-container'>
      <p className='product-name'>{product.productName}</p>
      <img
        src={product.image}
        alt='product'
        className='product-image'
      />
      <div className='price-container'>
        <p
          className={`price ${product.priceWithDiscount ? 'price-dashed' : ''}`}
        >
          {formatNumberToMoney(product.price, product.currency)}
        </p>
        {product.priceWithDiscount ? (
          <>
            <p className='price price-discount'>
              {formatNumberToMoney(product.priceWithDiscount, product.currency)}
            </p>
            {/* <p className='price price-discount'>
              Last {(Math.random() * 10).toFixed(0)} items
            </p> */}
          </>
        ) : (
          <div style={{ height: '28px' }}></div>
        )}
      </div>
      <div className='product-footer'>
        <button
          className='main-button product-button'
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
