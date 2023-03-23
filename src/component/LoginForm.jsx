import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginForm({ login }) {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  return (
    <form className="login-form">
      <input type="email" placeholder="Email" value={email} onChange={setEmail} />
      <input type="password" placeholder="Password" value={password} onChange={setPassword} />
      <button type="button" onClick={() => login({ email, password })}>Login</button>
    </form>
  );
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
