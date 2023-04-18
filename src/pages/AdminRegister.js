import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/AdminRegister.css";

const AdminRegister = () => {
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
      <h1 className='adminRegister'>Admin Registration</h1>
      <p>Register as a admin to access the Admin Dashboard</p>
      <form className='adminFormRegister' onSubmit={handleSubmit}>
      <div>
          <label className='adminLabelRegister' htmlFor="name">Name:</label>
          <input className='adminInputRegister'
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label className='adminLabelRegister' htmlFor="email">Email:</label>
          <input className='adminInputRegister'
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label className='adminLabelRegister' htmlFor="password">Password:</label>
          <input className='adminInputRegister'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <label className='adminLabelRegister' htmlFor="confirmPassword">Confirm Password:</label>
          <input className='adminInputRegister'
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p className='Log'>Already registered? <Link to='/adminLogin'>Login here</Link></p>
    </div>
  );
};

export default AdminRegister;
