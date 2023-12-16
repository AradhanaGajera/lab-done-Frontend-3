// src/App.js
import React from 'react';
import GenericForm from './GenericForm';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <h1>Forms Lab</h1>
      <Signup />
      <h2>Generic Form</h2>
      <GenericForm />
    </div>
  );
}

export default App;