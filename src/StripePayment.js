import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Load Stripe with your public key
const stripePromise = loadStripe('pk_test_51Prk4iP3z9cYtfBXGpfTyOPgTNvhetWtDfraYT7P32oD2JiGW9Z3AAhtM55zBdNbAMZjDJj9ToWKPjc6oMth9pPw008EmnNb3s');

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Fetch client secret from your server
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount })
    });
    const { clientSecret } = await response.json();

    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (stripeError) {
      setError(stripeError.message);
    } else if (paymentIntent.status === 'succeeded') {
      setSuccess('Payment successful!');
      // Handle success (e.g., redirect to a success page or show a success message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay ${amount}
      </button>
      {error && <div>{error}</div>}
      {success && <div>{success}</div>}
    </form>
  );
};

const StripePayment = ({ amount }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm amount={amount} />
  </Elements>
);

export default StripePayment;
