
import React from 'react';

const Trainer = ({ trainer }) =>{
  return(
    <div className="TrainerCom">
        <p><strong>Name:</strong>{trainer.name}</p>
        <p><strong>Email:</strong>{trainer.email}</p>
        <p><strong>Qualifications:</strong>{trainer.qualifications}</p>

    </div>
  )
}
export default Trainer;