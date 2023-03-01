/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './component/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './scss/main.scss';

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}

export default App;
