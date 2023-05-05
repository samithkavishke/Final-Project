import React, { useState } from 'react';
import "../Styles/ContactForm.css"

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Here you can write your code to submit the form data to your email sending service.
    const response = await fetch('http://localhost:8000/contact/contactUs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });

    // Handle the response from the email sending service.
    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('There was an error sending your message. Please try again later.');
    }

    // Clear the form fields after submitting the form.
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='formCon'>
      <h1 className='megs'>Contact Us....</h1>
      <form className='conForm' onSubmit={handleSubmit}>
        <input
          className='input1'
          placeholder='Name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className='input1'
          placeholder='Email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <textarea
          className='text1'
          placeholder='Message'
          rows='4'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button className='button1' type='submit'>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm;

//It uses the useState hook to manage the state of the form fields,
 //and the fetch function to send a POST request to an email sending service when the user submits the form. 
// The onSubmit prop is also used on the form element to handle the form submission event.