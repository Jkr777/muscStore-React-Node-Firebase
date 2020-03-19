import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectItemsTotal } from '../../redux/cart/selectors';
import CheckoutItem from '../../components/Checkout-Item';
import StripeBtn from '../../components/Stripe-button';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    {
      cartItems.map(i => <CheckoutItem key={i.id} cartItem={i} />)
    }
    <div className="checkout-total">
      <span>TOTAL: $ {cartTotal}</span>
    </div>
    <StripeBtn price={cartTotal} />
    
    <div className="test-warning">
      <span>* Test Credit Card*</span>
      <span>4242 4242 4242 4242 - Exp: 01/20 - CVV: 123 </span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage);