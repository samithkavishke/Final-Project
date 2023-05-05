import React from 'react'
import { Link } from 'react-router-dom'
//import ReorderIcon from '@mui/icons-material/Reorder';
import '../Styles/Navbar.css'

function Navbar() {

  return (
    <div className="Navigation">
        <ul className='ul'>
        <h1 className='logo'>FitFlow</h1> 

        <Link className='style' to="/">Home</Link>
        <Link className='style' to="/about">About Us</Link>
        
        <Link className='style' to="/membership">Membership</Link>
        <Link className='style' to="/contact">Contact Us</Link>
        <Link className='style' to="/trainer-details">Trainers</Link>
{/*         
        <Link to="/sign">
        <button className='sign'>Sign up</button>
        </Link> */}
        </ul>
    </div>
    
  )
}
export default Navbar
