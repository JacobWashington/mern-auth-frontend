// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';

// Components
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/Footer';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
  // Set state values
 
  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <h1>MERN Authentication</h1>
      <Signup />
    </div>
  );
}

export default App;
