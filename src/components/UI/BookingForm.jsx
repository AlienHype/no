import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../../styles/booking-form.css";
import { Form, FormGroup, Label } from "reactstrap";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import PaymentMethod from "./PaymentMethod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = ({ carId }) => {
  const [formData, setFormData] = useState({
    carId: carId,
    lastName: "",
    email: "",
    phoneNumber: "",
    fromAddress: "",
    toAddress: "",
    personCount: "1 person",
    comments: "",
  });

  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User data: ", user);

        const displayName = user.displayName || "";
        const [firstName, lastName] = displayName.split(" ") || ["", ""];

        setFormData((prevData) => ({
          ...prevData,
          email: user.email || prevData.email,
          firstName: firstName || prevData.firstName,
          lastName: lastName || prevData.lastName,
          phoneNumber: user.phoneNumber || prevData.phoneNumber,
        }));
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormComplete = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phoneNumber &&
      formData.fromAddress &&
      formData.toAddress &&
      formData.personCount
    );
  };

  const handleSubmit = (paymentMethod) => {
    if (!isFormComplete()) {
      toast.error("Please complete the booking form before proceeding with payment.");
      return;
    }

    const serviceID = "service_cja2s17";
    const templateID = "template_i01zyfh";
    const userID = "e8W6hJlaDBpjDWRA_";

    const emailData = { ...formData };

    emailjs
      .send(serviceID, templateID, emailData, userID)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);

        
        toast.success("You have successfully booked a car!");

        // Handle redirection based on payment method
        switch (paymentMethod) {
          case "Face to Face":
            window.location.href =
              "https://wa.me/+23057543530?text=Hi%20I%20would%20like%20to%20request%20a%20call%20from%20Hype%20Rental";
            break;
          case "Juice MCB":
            window.location.href = "https://ib.mcb.mu/T001/banking.jsp";
            break;
          default:
            navigate("/confirmation");
        }
      })
      .catch((err) => {
        console.error("Failed to send email. Error:", err);
      });
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Label for="firstName">
          First Name <span className="required-asterisk">*</span>
        </Label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Label for="lastName">Last Name</Label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Label for="email">Email</Label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Label for="phoneNumber">Phone Number</Label>
        <input
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Label for="fromAddress">From Address</Label>
        <input
          type="text"
          id="fromAddress"
          name="fromAddress"
          value={formData.fromAddress}
          onChange={handleChange}
          placeholder="From Address"
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Label for="toAddress">To Address</Label>
        <input
          type="text"
          id="toAddress"
          name="toAddress"
          value={formData.toAddress}
          onChange={handleChange}
          placeholder="To Address"
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Label for="personCount">Number of People</Label>
        <select
          id="personCount"
          name="personCount"
          value={formData.personCount}
          onChange={handleChange}
        >
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>

      <FormGroup>
        <Label for="comments"></Label>
        <textarea
          id="comments"
          name="comments"
          rows={5}
          value={formData.comments}
          onChange={handleChange}
          placeholder="Write a message"
        ></textarea>
      </FormGroup>

      {/* Button to show payment options */}
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={() => setShowPaymentOptions(!showPaymentOptions)}
      >
        {showPaymentOptions ? "Hide Payment Options" : "Show Payment Options"}
      </button>

      {/* Conditionally render PaymentMethod component */}
      {showPaymentOptions && (
        <PaymentMethod handlePayment={handleSubmit} isFormComplete={isFormComplete} />
      )}

     
      <ToastContainer />
    </Form>
  );
};

export default BookingForm;
