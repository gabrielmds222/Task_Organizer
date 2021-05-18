import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css';

const TaskDetails = ( ) => {
    const params = useParams();
    const history = useHistory();

    const handleBackButton = () => {
        history.goBack();
    };

    return (
        <>
        <div className="back-button-container">
            <Button onClick={handleBackButton}>Voltar</Button>
        </div>
        <div className="task-details-container">
           <h2>{params.taskTitle}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tenetur possimus perferendis eveniet quasi modi?
            </p>
        </div>
        </>
    );
};

export default TaskDetails;