import React, { createContext, useContext, useState } from 'react';
import carData from "../assets/data/carData";

const CarContext = createContext();

export const useCarContext = () => useContext(CarContext);

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState(carData);

  const toggleAvailability = (id) => {
    setCars(cars.map(car =>
      car.id === id ? { ...car, available: !car.available } : car
    ));
  };

  const updatePrice = (id, newPrice) => {
    setCars(cars.map(car =>
      car.id === id ? { ...car, price: parseFloat(newPrice) } : car
    ));
  };

  return (
    <CarContext.Provider value={{ cars, toggleAvailability, updatePrice }}>
      {children}
    </CarContext.Provider>
  );
};
