import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { formatNumberToMoney } from '../../../utils/formatters';
import CartProductDetail from '../../cart/productDetail/productDetail';
import './styles.css';
import { MainButton } from '../button/StyledButton';

const SideCart = () => {
  const cartState = useSelector((state: RootState) => state.cart);
  return (
    <div className='main-cart-container'>
      <p className='subtotal-header'>Subtotal</p>
      <p className='subtotal-price'>
        {formatNumberToMoney(cartState.totalCartPrice)}
      </p>
      <MainButton
        $fontSize='15px'
        $margin='0px 0px 15px 0px'
        $padding='5px 0px'
      >
        Pagar
      </MainButton>
      <div className='main-cart-products-container'>
        {cartState.items.map(item => (
          <div key={item.id}>
            <CartProductDetail item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideCart;
