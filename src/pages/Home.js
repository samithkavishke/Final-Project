
import React , {useState}from 'react';
import { Link } from 'react-router-dom';
//import { Link } from "react-router-dom";
//import BackImage from "../Images/one.jpg";
import "../Styles/Home.css";


const Home = () => {
  const [selectedMembership, setSelectedMembership] = useState('');

  const handleMembershipChange = (event) => {
    setSelectedMembership(event.target.value);
  }
  return (<>
    <div className='homepage'>

    <div className='background'></div>

    <div className='home-text'>
      <h1>Enjoy with Fitness</h1>
      <p>“You just can’t beat the person who never gives up.”</p> 
      <div>
      <select className='dropdown' value={selectedMembership} onChange={handleMembershipChange}>
            <option className='select' value="">Select And Register</option>
            <option value="Sign">User</option>
            <option value="adminRegister">Admin</option>
            <option value="Trainer">Trainer</option>
          </select>
      <Link to={`${selectedMembership}`}>
      <button disabled={!selectedMembership}>Register here!</button>
      </Link>
      </div>
    </div>
    </div>
    </>)
}

export default Home









