import React from 'react';

function RegisterForm() {
  return (
    <form className="register-form">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
