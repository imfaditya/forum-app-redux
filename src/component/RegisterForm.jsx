import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterForm({ onRegister }) {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  return (
    <form className="register-form">
      <input type="text" placeholder="Name" value={name} onChange={setName} />
      <input type="email" placeholder="Email" value={email} onChange={setEmail} />
      <input type="password" placeholder="Password" value={password} onChange={setPassword} />
      <button type="button" onClick={() => onRegister({ name, email, password })}>Register</button>
    </form>
  );
}

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegisterForm;
