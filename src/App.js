import React from 'react';
import { CarProvider } from './Context/CarContext';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <CarProvider>
      <Layout />
    </CarProvider>
  );
}

export default App;
