import React from "react";
import { useNavigate } from "react-router-dom";
import paypal from "../../assets/all-images/paypal.jpg";
import juice from "../../assets/all-images/juice.png";
import facetoface from "../../assets/all-images/facetoface.png";
import "../../styles/payment-method.css";

const PaymentMethod = ({ handlePayment }) => {
  const navigate = useNavigate();

  const handlePaymentClick = (method) => {
    handlePayment(method);
  };

  return (
    <>
      <div className="payment-buttons">
        <button 
          className="payment-button paypal-button" 
          onClick={() => handlePaymentClick("PayPal")}
        >
          <img src={paypal} alt="Online Payement" className="payment-icon" />
          Pay Online
        </button>
      </div>

      <div className="payment-buttons mt-3">
        <button 
          className="payment-button face-to-face-button" 
          onClick={() => handlePaymentClick("Face to Face")}
        >
          <img src={facetoface} alt="Face to Face" className="payment-icon" />
          Pay Face to Face
        </button>
      </div>

      <div className="payment-buttons mt-3">
        <button 
          className="payment-button juice-mcb-button" 
          onClick={() => handlePaymentClick("Juice MCB")}
        >
          <img src={juice} alt="Juice MCB" className="payment-icon" />
          Pay with Juice MCB
        </button>
      </div>
    </>
  );
};

export default PaymentMethod;
