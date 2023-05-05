import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/UserProfile.css';
import { useLocation } from 'react-router-dom';
import "./SignupSigning"

export default function UserDetails() {
  const location = useLocation();
  const newUser = location.state;

  console.log(newUser); // check if newUser is properly received from the state

  return (
    <div className="UserProfileContainerNav">
      <div className='UserProfileNav'>
        <h1 className='UserProfileH1'>User Profile</h1>
        <p className='UserProfileP'>Name: {newUser.name}</p>
        <p className='UserProfileP'>Email: {newUser.email}</p>
        <p className='UserProfileP'>Address: {newUser.address}</p>
        <p className='UserProfileP'>Phone Number: {newUser.phoneNumber}</p>
        <p className='UserProfileP'>NIC: {newUser.nic}</p>
        <blockquote>‘Whether you think you can, or you think you can’t, you’re right.’ — Henry Ford, industrialist</blockquote>

        
      </div>

      <nav className='UserProfileNavUser'>
        <ul className="navUser">
          <li className="nav-itemUser">
            <Link className="nav-link activeUser" aria-current="page" to="/userDetails">Profile</Link>
          </li>
          <li className="nav-itemUser">
            <Link className="nav-linkUser" to="/membership">Membership</Link>
          </li>
          <li className="nav-itemUser">
            <Link className="nav-linkUser" to="/reservation">Reservation</Link>
          </li>
          <li className="nav-itemUser">
            <Link className="nav-link disabledUser" to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}


