import React from 'react'
import "../Styles/Membership.css"; 
import { Link } from 'react-router-dom';
//import SignupSigning from './SignupSigning';

const Membership = () => {
  return (
    <div className='membership'>
    <div className='backgroundMembership'></div>
            <div className='member-top'>
            <h2 className='title'>Get a Package</h2>
            <p>
              You can pick a package any thing suitable for you
            </p>
    </div>
      <div className='price'>
        <div className='item'>
          <div className='price_card'>
            <h2 className='section_title'>One Month Package</h2>
            <h2 className='pricing'>1000LKR</h2>
          </div>

          <div className='service'>
            <ul>
              <li>Valid for 1 month</li>
              <li>No personal trainer</li>
              <li>Per one person only</li>            
            </ul>
            <Link to='/sign'>
            <button className='join'>Purchase</button>
            </Link>
          </div>

        </div>
        <div className='item'>
          <div className='price_card'>
            <h2 className='section_title'>Six Month Package</h2>
            <h2 className='pricing'>5000LKR</h2>
          </div>

          <div className='service'>
            <ul>
              <li>Valid for 6 month</li>
              <li>No personal trainer</li>
              <li>Per one person only</li>            
            </ul>
            <Link to='/sign'>
            <button className='join'>Purchase</button>
            </Link>
          </div>
        </div>
        <div className='item'>
          <div className='price_card'>
            <h2 className='section_title'>One year Package</h2>
            <h2 className='pricing'>12000LKR</h2>
          </div>

          <div className='service'>
            <ul>
              <li>Valid for 12 month</li>
              <li>One personal trainer</li>
              <li>Per one person only</li>            
            </ul>
            <Link to='/sign'>
            <button className='join'>Purchase</button>
            </Link>
          </div>
        </div>

      </div>
    </div>
    
  );
}

export default Membership
