import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loadable from '@loadable/component';
import logo from '../assets/logo.svg';
import api from '../utils/api';

const RegisterForm = loadable(() => import('../component/RegisterForm'));

function RegisterPage() {
  const navigate = useNavigate();

  const onRegister = async ({ name, email, password }) => {
    const response = await api.register({ name, email, password });
    if (response.status === 'success') {
      navigate('/');
    } else {
      alert(response.message);
    }
  };

  return (
    <section className="auth-card">
      <img src={logo} alt="disquite" />
      <h2>Register to Discuss</h2>
      <RegisterForm onRegister={onRegister} />
      <Link className="login-button" to="/">
        Already have account?
      </Link>
    </section>
  );
}

export default RegisterPage;
