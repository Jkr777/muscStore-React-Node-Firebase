import React from 'react';
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/action-generator';
import { createStructuredSelector } from 'reselect';
import { selectItemsNumber } from '../../redux/cart/selectors';

const CartIcon = ({ toggleCart, total }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <i className="fas fa-dolly-flatbed cart-icon__icon"></i>
    <span className="cart-icon__count">{total}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  total: selectItemsNumber
}); 

export default connect(mapStateToProps, { toggleCart })(CartIcon);