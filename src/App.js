import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import PaymentPage from './Components/PaymentPage';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <PaymentPage/>
    </React.Fragment>
  );
}

export default App;
