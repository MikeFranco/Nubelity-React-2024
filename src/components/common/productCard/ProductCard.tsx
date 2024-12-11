import React from 'react';

import './styles.css';
import { formatNumberToMoney } from '../../../utils/formatters';

interface IProductCard {
  image: string;
  productName: string;
  description: string;
  price: number;
  priceWithDiscount?: number;
  productRate?: number;
  currency?: string;
}

const ProductCard = ({
  image,
  productName,
  description,
  price,
  priceWithDiscount,
  productRate,
  currency,
}: IProductCard) => {
  return (
    <div className='product-card-container'>
      <p className='product-name'>{productName}</p>
      <img
        src={image}
        alt='product'
        className='product-image'
      />
      <div className='price-container'>
        <p className={`price ${priceWithDiscount ? 'price-dashed' : ''}`}>
          {formatNumberToMoney(price, currency)}
        </p>
        {priceWithDiscount && (
          <>
            <p className='price price-discount'>
              {formatNumberToMoney(priceWithDiscount, currency)}
            </p>
            <p className='price price-discount'>
              Last {(Math.random() * 10).toFixed(0)} items
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
