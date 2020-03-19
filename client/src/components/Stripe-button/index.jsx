import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeBtn = ({ price }) => {
  const stripePrice = price * 100;
  const publicKey = 'pk_test_Wt5b1oPN3qgGDOSo1kMwLMSt00NAXqK741';

  const onSubmit = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount:stripePrice,
        token 
      }
    }).then(() => alert("Payment successful"))
      .catch(() => alert("There was an issue with your payment"));
  };

  return (
    <div>
      <StripeCheckout 
        label='Pay Now'
        name='DJ Store Ltd.'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={stripePrice}
        panelLabel='Pay Now'
        token={onSubmit}
        stripeKey={publicKey}
      />
    </div>
  )
}; 
export default StripeBtn;