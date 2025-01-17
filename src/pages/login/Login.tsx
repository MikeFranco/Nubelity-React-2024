import React, { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useUser();

  const onLogin = async () => {
    const resultLogin = await login({ email, password });
    if (resultLogin?.name) {
      navigate('/');
    }
    console.log('%c⧭ resultLogin', 'color: #eeff00', resultLogin);
  };

  return (
    <div className='login-main-container'>
      <div className='login-container'>
        <input
          type='text'
          placeholder='Enter your email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button
          onClick={() => onLogin()}
          className={`main-button ${
            !email || !password ? 'button-disabled' : 'button-enabled'
          }`}
          disabled={!email || !password}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
