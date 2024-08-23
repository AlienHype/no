import React from 'react';
import { CarProvider } from '../Context/CarContext';
import CarListing from '../pages/CarListing';
import AdminDashboard from '../pages/AdminDashboard';

const App = () => {
  return (
    <CarProvider>
      <AdminDashboard />
      <CarListing />
    </CarProvider>
  );
};

export default App;
