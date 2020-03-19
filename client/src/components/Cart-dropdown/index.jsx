import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/selectors';
import { toggleCart } from '../../redux/cart/action-generator';
import { withRouter } from 'react-router-dom';
import CartItem from '../Cart-Item';
import FormButton from '../Form-button';

const CartDropdown = ({ cartItems, history, toggleCart }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items">
      {
        cartItems.length ?
          cartItems.map(i => <CartItem key={i.id} {...i} />)
        :
          <span className="cart-dropdown__empty-message">Your cart is empty</span>
      }
    </div>
    <FormButton onClick={() => {
      history.push("/checkout");
      toggleCart();
    }}> CHECKOUT</FormButton> 
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, {toggleCart})(CartDropdown));