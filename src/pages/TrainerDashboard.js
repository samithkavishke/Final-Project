import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/TrainerDetails.css';

const TrainerDetails = () => {
  const [trainer, setTrainer] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get('http://localhost:8000/trainer/trainerLogin');
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (!user) {
      getCurrentUser();
    }

    const fetchTrainer = async (userId) => {
      try {
        const response = await axios.get(`http://localhost:8000/trainer/profile/${userId}`);
        setTrainer(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (user && user.id) {
      fetchTrainer(user.id);
    }
  }, [user]);

  return (
    <div>
      <div className='trainer'>
        <h1>Trainer Profile</h1>
        {trainer ? (
          <>
            <p><strong>Name:</strong> {trainer.name}</p>
            <p><strong>Email:</strong> {trainer.email}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default TrainerDetails;
