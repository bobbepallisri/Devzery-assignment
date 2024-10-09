import React from 'react';
import ApiChain from './components/ApiChain';
import './index.css';

const App = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">API Chaining Dashboard</h1>
      <ApiChain />
    </div>
  );
};

export default App;
