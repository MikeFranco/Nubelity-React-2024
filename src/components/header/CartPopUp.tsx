import React from 'react';

interface ICartPopUp {
  ref: any;
}

const CartPopUp = ({ ref }: ICartPopUp) => {
  return (
    <div ref={ref}>
      <p>Cart Pop Up</p>
    </div>
  );
};

export default CartPopUp;
