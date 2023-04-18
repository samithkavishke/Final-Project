import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom'; // Import useHistory from React Router
import { Link } from 'react-router-dom';
import "../Styles/AdminLogin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

 

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Code to authenticate user
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1 className='logT'>Log in</h1>
      <p>Login as a admin here!</p>
      {isLoggedIn ? (
        <p className='pLog'>You have successfully logged in.</p>
      ) : (
        <>
          <form className='formAdmin' onSubmit={handleLoginSubmit}>
            <div>
              <label className='labelAdmin' htmlFor="email">Email:</label>
              <input className='inputAdmin'
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label className='labelAdmin' htmlFor="password">Password:</label>
              <input className='inputAdmin'
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <p>Not registered yet? <Link to='/register'>Register here</Link></p>
        </>
      )}
    </div>
  );
};

export default AdminLogin
