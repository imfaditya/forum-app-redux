import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import LoginForm from '../component/LoginForm';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = async ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="auth-card">
      <img src={logo} alt="disquite" />
      <h2>Login to Discuss</h2>
      <LoginForm login={onLogin} />
      <Link className="register-button" to="/register">
        Sign up for Disquite
      </Link>
    </section>
  );
}

export default LoginPage;
