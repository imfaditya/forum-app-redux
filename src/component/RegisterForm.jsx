import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import api from '../utils/api';

function RegisterForm() {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const navigate = useNavigate();

  const onRegister = async (event) => {
    event.preventDefault();
    const response = await api.register({ name, email, password });
    if (response.status === 'success') {
      navigate('/');
    } else {
      alert(response.message);
    }
  };

  return (
    <form className="register-form" onSubmit={onRegister}>
      <input type="text" placeholder="Name" value={name} onChange={setName} />
      <input type="email" placeholder="Email" value={email} onChange={setEmail} />
      <input type="password" placeholder="Password" value={password} onChange={setPassword} />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
