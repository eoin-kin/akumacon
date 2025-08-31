import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// PaymentForm component for handling Stripe payment inputs
// Used within the Checkout page to process payments
const PaymentForm = ({ reservationId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/success",
      },
      redirect: "if_required", // stays SPA-friendly
    });

    if (error) {
      setErrorMessage(error.message);
    } else if (paymentIntent?.status === "succeeded") {
      navigate("/success", { state: { reservationId } });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button
        size="lg"
        type="submit"
        disabled={!stripe || !elements || loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </Button>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </form>
  );
};
const PaymentFormDummy = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000); // simulate a click
  };

  return (
    <Button size="lg" onClick={handleClick} disabled={loading}>
      {loading ? "Processing..." : "Pay Now"}
    </Button>
  );
};

export { PaymentFormDummy };
export default PaymentForm;
