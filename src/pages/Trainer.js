import React, { useState } from 'react';
import "../Styles/Trainer.css";

const Trainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to authenticate user
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1 className='logT'>Login</h1>
      <p>Login as a trainer here!</p>
      {isLoggedIn ? (
        <p className='pLog'>You have successfully logged in.</p>
      ) : (
      
      <form className='formTrainer' onSubmit={handleSubmit}>
        <div>
          <label className='labelTrainer' htmlFor="email">Email:</label>
          <input className='inputTrainer'
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label className='labelTrainer' htmlFor="password">Password:</label>
          <input className='inputTrainer'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      )}
    </div>
  );
};

export default Trainer;

