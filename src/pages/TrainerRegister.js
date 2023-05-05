import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/TrainerRegister.css";
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [qualifications, setQualifications] = useState('');

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

  const handleQualificationsChange = (event) => {
    setQualifications(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      qualifications: qualifications
    };

    axios.post('http://localhost:8000/trainer/trainerRegister', userData)
      .then(response => {
        console.log(response.data);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setQualifications('');
        alert("Register done!")
        console.log("Register done!")

      })
      .catch(error => {
        console.log(error);
      });
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
        <div>
          <label className='labelRegister' htmlFor="qualifications">Qualifications:</label>
          <input className='inputRegister'
            type="text"
            id="qualifications"
            value={qualifications}
            onChange={handleQualificationsChange}
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
