import React, { useState } from 'react';
import '../Styles/Reservation.css';
import axios from 'axios';

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
    
  });

  const [success, setSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/reservation/Booking', formData)
      .then(response => {
        console.log(response.data);
        setSuccess(true);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="reservation-page">

      <h1 className='heading'>Make a Reservation</h1>
      <form className='formReservation' onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input className='rInput' type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input className='rInput' type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input className='rInput' type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input className='rInput' type="date" name="date" value={formData.date} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input className='rInput' type="time" name="time" value={formData.time} onChange={handleInputChange} />
        </div>

        <button className='submit' type="submit"onClick={handleSubmit}>Submit</button>
      </form>
      {success && (
        <div className="success-message">
          <p>Your reservation has been submitted:</p>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <p>Date: {formData.date}</p>
          <p>Time: {formData.time}</p>
        </div>
      )}
    </div>
  );
}

export default Reservation;
