import React from 'react';

import { formatNumberToMoney } from '../../../utils/formatters';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../../store/cart/cartSlice';
import { ICartItem } from '../../../store/cart/types';
import { RootState } from '../../../store/store';
import QuantityButtons from '../../cart/quantityButtons/QuantityButtons';
import './styles.css';

const ProductCard = (product: ICartItem) => {
  const cartState = useSelector((state: RootState) => state.cart);
  const itemFromCartState = cartState.items.filter(
    cartItem => cartItem.id === product.id,
  )[0];
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCartItem(product));
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
      {!itemFromCartState ? (
        <div className='product-footer'>
          <button
            className='main-button product-button'
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <QuantityButtons item={product} />
      )}
    </div>
  );
};

export default ProductCard;
