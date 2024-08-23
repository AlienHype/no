import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../../styles/booking-form.css";
import { Form, FormGroup, Label } from "reactstrap";
import { auth } from "../../firebase-config"; // Import auth from your Firebase config
import { onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth state change listener
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    fromAddress: "",
    toAddress: "",
    personCount: "1 person",
    comments: "",
    paymentMethod: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User data: ", user); // Log the user object to see the structure

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

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (paymentMethod) => {
    setFormData({
      ...formData,
      paymentMethod,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_cja2s17";
    const templateID = "template_i01zyfh";
    const userID = "e8W6hJlaDBpjDWRA_";

    const emailData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      ...formData,
    };

    emailjs.send(serviceID, templateID, emailData, userID)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        
        // Automatically redirect to CarListing
        navigate('/cars');
      })
      .catch((err) => {
        console.error("Failed to send email. Error:", err);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
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

      <div className="text-end mt-5">
        <button type="submit" style={{ backgroundColor: "red", color: "white"}}>
          Reserve Now
        </button>
      </div>
    </Form>
  );
};

export default BookingForm;
