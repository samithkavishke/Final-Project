import React, { useEffect, useState } from 'react';
//import { useLocation } from 'react-router-dom';
import Trainer from '../components/TrainerComponents'
import "../Styles/TrainerDetails.css"

const TrainerDetails = () => {
  const [trainers, setTrainers] = useState(null)

  useEffect(()=>{
      const fetchTrainers = async () =>{
        const response = await fetch ('http://localhost:8000/trainer/trainersAll')
        const json = await response.json()

        if(response.ok){
          setTrainers(json)
        }
      }
      fetchTrainers()
  }, [])


  return (
    <div>
      <div className='trainers'>
        <h1>Trainer Profiles</h1>
      {trainers && trainers.map((trainer) =>(
          //<p key={trainer._id}>{trainer.name}</p>
          
          
          <Trainer key={trainer._id} trainer={trainer}/>
      ))}
      </div>
    </div>
  );
};

export default TrainerDetails;
