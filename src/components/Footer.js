import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import "../Styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='top'>
         <div>
            <h1>FitFlow</h1>
         </div>
         <div className="smIcon">
           <InstagramIcon /> <FacebookIcon />
        </div>
        </div>
        <div className='bottom'>
            <div>
                <h2>Phone:</h2>
                <Link className='f' to='/'>+94763589048</Link>
               
            </div>
            <div>
                <h2>Address:</h2>
                <Link className='f' to='/'>02/A, Aguruwathota Road, Horana</Link>
               
            </div>
            <div>
                <h2>Email:</h2>
                <Link className='f' to='/'>rashmiprarthana@gmail.com</Link>
               
            </div>
            <div>
                <h2>Open Hours</h2>
                <Link className='f' to='/'>Monday 11am-7pm</Link>
                <Link className='f' to='/'>Friday 11am-8pm</Link>
                <Link className='f' to='/'>Saturday 10am-6pm</Link>
                <Link className='f' to='/'>Sunday 11am-6pm</Link>
            </div>
            
        </div>
       
    </div>
  )
}

export default Footer
