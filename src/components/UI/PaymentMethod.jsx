import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleReserveClick = () => {
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment-method" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment-method" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment-method" /> Master Card
        </label>

        <img src={masterCard} alt="Master Card" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment-method" /> Paypal
        </label>

        <img src={paypal} alt="Paypal" />
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment-method" /> Payment on the spot/Face to Face
        </label>
      </div>

      

    </>
  );
};

export default PaymentMethod;
