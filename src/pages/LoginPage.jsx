import React from 'react';
import logo from '../assets/logo.svg';
import LoginForm from '../component/LoginForm';

function LoginPage() {
  return (
    <section className="auth-card">
      <img src={logo} alt="disquite" />
      <h2>Login to Discuss</h2>
      <LoginForm />
    </section>
  );
}

export default LoginPage;
