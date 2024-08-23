import React, { useState, useEffect } from 'react';
import carData from "../assets/data/carData";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [cars, setCars] = useState(carData);
  const [availableCount, setAvailableCount] = useState(0);
  const [bookedCount, setBookedCount] = useState(0);
  
  // Form state
  const [newCar, setNewCar] = useState({
    id: '',
    imgUrl: '',
    carName: '',
    brand: '',
    model: '',
    price: '',
    speed: '',
    gps: '',
    seatType: '',
    automatic: '',
    description: '',
    available: true
  });

  useEffect(() => {
    const availableCars = cars.filter(car => car.available).length;
    const bookedCars = cars.length - availableCars;
    setAvailableCount(availableCars);
    setBookedCount(bookedCars);
  }, [cars]);

  const handleAvailabilityToggle = (id) => {
    setCars(cars.map(car =>
      car.id === id ? { ...car, available: !car.available } : car
    ));
  };

  const handleEdit = (id) => {
    const newPrice = prompt('Enter new price');
    
    if (newPrice !== null && !isNaN(newPrice) && newPrice.trim() !== "") {
      setCars(cars.map(car =>
        car.id === id ? { ...car, price: parseFloat(newPrice) } : car
      ));
    } else {
      alert("Please enter a valid number for the price.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCar(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCar.id && newCar.imgUrl && newCar.carName && newCar.brand && newCar.model && newCar.price) {
      setCars([...cars, newCar]);
      setNewCar({
        id: '',
        imgUrl: '',
        carName: '',
        brand: '',
        model: '',
        price: '',
        speed: '',
        gps: '',
        seatType: '',
        automatic: '',
        description: '',
        available: true
      });
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="car-stats">
        <div className="car-stat">
          <h2>Available Cars</h2>
          <p>{availableCount}</p>
        </div>
        <div className="car-stat">
          <h2>Booked Cars</h2>
          <p>{bookedCount}</p>
        </div>
      </div>
      <div className="add-car-form">
        <h2>Add New Car</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={newCar.id}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="imgUrl"
            placeholder="Image URL"
            value={newCar.imgUrl}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="carName"
            placeholder="Car Name"
            value={newCar.carName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={newCar.brand}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={newCar.model}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newCar.price}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="speed"
            placeholder="Speed"
            value={newCar.speed}
            onChange={handleChange}
          />
          <input
            type="text"
            name="gps"
            placeholder="GPS"
            value={newCar.gps}
            onChange={handleChange}
          />
          <input
            type="text"
            name="seatType"
            placeholder="Seats"
            value={newCar.seatType}
            onChange={handleChange}
          />
          <input
            type="text"
            name="automatic"
            placeholder="Transmission"
            value={newCar.automatic}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newCar.description}
            onChange={handleChange}
          />
          <button type="submit">Add Car</button>
        </form>
      </div>
      <div className="car-list">
        {cars.map(car => (
          <div key={car.id} className="car-card">
            <img src={car.imgUrl} alt={car.carName} />
            <div className="car-info">
              <h2>{car.carName}</h2>
              <p>Brand: {car.brand}</p>
              <p>Model: {car.model}</p>
              <p>Price: Rs{car.price}</p>
              <p>Speed: {car.speed}</p>
              <p>GPS: {car.gps}</p>
              <p>Seats: {car.seatType}</p>
              <p>Transmission: {car.automatic}</p>
              <p>Description: {car.description}</p>
              <button onClick={() => handleAvailabilityToggle(car.id)}>
                {car.available ? 'Mark as Rented' : 'Mark as Available'}
              </button>
              <button onClick={() => handleEdit(car.id)}>
                Edit Price
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
