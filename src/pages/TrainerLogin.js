import React, { useState } from 'react';
import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';
import '../Styles/TrainerLogin.css';

const Trainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 // const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: email,
      password: password
    };

    axios.post('http://localhost:8000/trainer/trainerLogin', userData)
    .then(response => {
      console.log(response.data);
      setEmail('');
      setPassword('');
      alert("Logged in!")
      console.log("Logged in!")
      //history.push('/trainerDashboard'); 
    })
    .catch(error => {
      console.log(error);
      alert("Invalid email or password");
    });
  };

  return (
    <div>
      <h1 className='loginT'>Trainer Login</h1>
      <p>Log in to access the training platform.</p>
      <form className='formLogin' onSubmit={handleSubmit}>
        <div>
          <label className='labelLogin' htmlFor="email">Email:</label>
          <input className='inputLogin'
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label className='labelLogin' htmlFor="password">Password:</label>
          <input className='inputLogin'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <p className='Reg'>Not registered? <Link to='/register'>Register here</Link></p>
    </div>
  );
};

export default Trainer;
