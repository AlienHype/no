import React, { useState } from "react";
import carData from "../src/assets/data/carData.js"; // Import the car data
import StripePayment from "./StripePayment"; // Import the Stripe payment component
import "../../styles/car-list.css";

const CarList = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="car-list">
      {selectedCar ? (
        <div>
          <h2>Selected Car: {selectedCar.carName}</h2>
          <StripePayment amount={selectedCar.price} /> {/* Pass the price for payment */}
        </div>
      ) : (
        <div>
          {carData.map((car) => (
            <div key={car.id} className="car-card">
              <img src={car.imgUrl} alt={car.carName} className="car-image" />
              <h3>{car.carName}</h3>
              <p>{car.description}</p>
              <p><strong>Price:</strong> ${car.price}</p>
              <button onClick={() => handleCarSelect(car)}>Select Car</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarList;
