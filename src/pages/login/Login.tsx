import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../profile/profileSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    console.log('%c⧭', 'color: #731d6d', 'login');
    //fetch a API para login
    setTimeout(() => {
      const userData = {
        id: 'asdasdas',
        name: 'Mike',
        lastName: 'Franco',
        email,
      };
      console.log('%c⧭ userData', 'color: #e57373', userData);
      dispatch(updateUserData(userData));
      navigate('/');
    }, 1000);
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
          className={`${
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
