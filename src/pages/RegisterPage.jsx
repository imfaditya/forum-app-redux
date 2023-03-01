import React from 'react';
import logo from '../assets/logo.svg';
import RegisterForm from '../component/RegisterForm';

function RegisterPage() {
  return (
    <section className="auth-card">
      <img src={logo} alt="disquite" />
      <h2>Register to Discuss</h2>
      <RegisterForm />
    </section>
  );
}

export default RegisterPage;
