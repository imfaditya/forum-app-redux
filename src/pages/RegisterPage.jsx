import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import RegisterForm from '../component/RegisterForm';

function RegisterPage() {
  return (
    <section className="auth-card">
      <img src={logo} alt="disquite" />
      <h2>Register to Discuss</h2>
      <RegisterForm />
      <Link className="login-button" to="/">
        Already have account?
      </Link>
    </section>
  );
}

export default RegisterPage;
