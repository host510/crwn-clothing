import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IdzOCBvwnNSQTu0M3CXzj9XAWn7KpZCGHNkVRwbpsoHFfbPKZ8yeuqhIcbwLbVOMi6g35hZTWPl8vO4gaQOZO3c00AfcT8O8W';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful');
      console.log(response);
    }).catch(error => {
      alert('There was an issue with your payment. Please make sure you use the provided credit card.');
      console.log('Payment error: ' + error);
    });
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;