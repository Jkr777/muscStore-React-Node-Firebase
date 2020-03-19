import React from 'react';
import { connect } from 'react-redux';
import { removeItem, decrementItem, addItem } from '../../redux/cart/action-generator';

const CheckoutItem = ({ cartItem, removeItem, addItem, decrementItem }) => (
  <div className="checkout-item">
    <div className="checkout-item__img">
      <img src={cartItem.imageUrl} alt="item" />
    </div>
    <span className="checkout-item__name">{cartItem.name}</span>
    <span className="checkout-item__quantity">
      <i className="fas fa-plus-square checkout-item__plus" onClick={() => addItem(cartItem)}></i> 
      {cartItem.quantity} 
      <i className="fas fa-minus-square checkout-item__minus" onClick={() => decrementItem(cartItem)}></i>
    </span>
    <span className="checkout-item__price">$ {cartItem.price}</span>
    <div className="checkout-item__remove-btn"> 
      <i className="fas fa-trash-alt" onClick={() => removeItem(cartItem.id)}></i>
    </div>
  </div>
);

export default connect(null, { removeItem, decrementItem, addItem })(CheckoutItem);