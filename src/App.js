/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './scss/main.scss';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  console.log(authUser);

  if (authUser === null) {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </main>

    </>

  );
}

export default App;
