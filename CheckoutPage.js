import React from 'react';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handlePayment = () => {
    // Integrate payment gateway here
    alert('Payment successful!');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Total Amount: {totalAmount}</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default CheckoutPage;
