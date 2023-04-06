import React, { useState } from 'react';
import "../Styles/Reservation.css";


function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
    
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission of form data here
    console.log(formData);
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
       
        <button className='submit' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reservation;
