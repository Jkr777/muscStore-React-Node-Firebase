import React from 'react';

const CartItem = ({ imageUrl, name, price, quantity }) => (
  <div className="cart-item">
    <img className="cart-item__img" src={imageUrl} alt="item"/>
    <div className="item-content">
      <span className="item-content__name">{name}</span>
      <span className="item-content__price">price: $ {price}</span>
      <span className="item-content__quantity"> quantity: {quantity}</span>
    </div>
  </div>
);

export default React.memo(CartItem);