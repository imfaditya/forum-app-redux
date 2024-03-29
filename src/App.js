import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './scss/main.scss';
import { asyncSetPreload } from './states/isPreload/action';
import Loading from './component/Loading';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncSetPreload());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <header>
          <Navbar authUser={authUser} />
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
      <Loading />
      <header>
        <Navbar authUser={authUser} />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
        </Routes>
      </main>

    </>

  );
}

export default App;
