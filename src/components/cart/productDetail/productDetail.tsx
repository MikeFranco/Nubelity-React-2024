import React from 'react';
import { ICartProductDetailProps } from './types';
import { formatNumberToMoney } from '../../../utils/formatters';
import QuantityButtons from '../quantityButtons/QuantityButtons';
import Separator from '../../common/separator/Separator';
import './styles.css';

const CartProductDetail = ({ item }: ICartProductDetailProps) => {
  return (
    <div className='item-main-container'>
      <img
        src={item.image}
        alt={item.productName}
        className='item-image'
      />
      <p style={{ marginTop: 0 }}>{item.productName}</p>
      <p>{formatNumberToMoney(item.priceWithDiscount ?? item.price)}</p>
      <QuantityButtons item={item} />
      <Separator
        height='1px'
        width='100%'
      />
    </div>
  );
};

export default CartProductDetail;
