import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IdzOCBvwnNSQTu0M3CXzj9XAWn7KpZCGHNkVRwbpsoHFfbPKZ8yeuqhIcbwLbVOMi6g35hZTWPl8vO4gaQOZO3c00AfcT8O8W';

  const onToken = token => {
    console.log(token);
    alert('Payment successful')
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