import React from 'react'
// import "../Styles/Membership.css"; 
import { Link } from 'react-router-dom';
//import SignupSigning from './SignupSigning';

const Payement = () => {
  return (
 
      <div className='price'>
        <div className='item'>
          <div className='price_card'>
            <h2 className='section_title'>One Month Package</h2>
            <h2 className='pricing'>3000LKR</h2>
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
            <h2 className='pricing'>5500LKR</h2>
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
    
  );
}

export default Payement;
