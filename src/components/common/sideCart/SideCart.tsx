import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { formatNumberToMoney } from '../../../utils/formatters';
import Separator from '../separator/Separator';
import QuantityButtons from '../../cart/quantityButtons/QuantityButtons';
import './styles.css';

const SideCart = () => {
  const cartState = useSelector((state: RootState) => state.cart);
  return (
    <div className='main-cart-container'>
      <h2 className='subtotal-header'>Subtotal</h2>
      <p className='subtotal-price'>
        {formatNumberToMoney(cartState.totalCartPrice)}
      </p>
      <button className='main-button go-to-checkout-button'>Pagar</button>
      {cartState.items.map(item => (
        <div
          className='item-main-container'
          key={item.id}
        >
          <img
            src={item.image}
            alt={item.productName}
            className='item-image'
          />
          <p style={{ marginTop: 0 }}>{item.productName}</p>
          <p>{formatNumberToMoney(item.priceWithDiscount ?? item.price)}</p>
          <QuantityButtons item={item} />
          <Separator
            height={'1px'}
            width={'100%'}
          />
        </div>
      ))}
    </div>
  );
};

export default SideCart;
