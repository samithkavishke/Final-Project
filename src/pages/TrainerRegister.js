import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/TrainerRegister.css";

const Register = () => {
const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to register user
  };

  return (
    <div>
      <h1 className='regT'>Trainer Registration</h1>
      <p>Register as a trainer to access the training platform.</p>
      <form className='formRegister' onSubmit={handleSubmit}>
      <div>
          <label className='labelRegister' htmlFor="name">Name:</label>
          <input className='inputRegister'
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label className='labelRegister' htmlFor="email">Email:</label>
          <input className='inputRegister'
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label className='labelRegister' htmlFor="password">Password:</label>
          <input className='inputRegister'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <label className='labelRegister' htmlFor="confirmPassword">Confirm Password:</label>
          <input className='inputRegister'
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p className='Log'>Already registered? <Link to='/trainer'>Login here</Link></p>
    </div>
  );
};

export default Register;
