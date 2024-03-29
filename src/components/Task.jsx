import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

import '../styles/Task.css';

const Task  = ({ task, handleTaskClick, handleTaskDelete }) => {

    const history = useHistory();

    const handleTaskDetailsClick = () =>{
        history.push(`/${task.title}`)
    }

    return ( 
        <>
        <div className="task-container" style={task.completed ? { borderLeft: "6px solid pink"} : {} }>
            
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">

                <button className="see-task-details-button"
                onClick={handleTaskDetailsClick} 
                >
                    
                    <CgInfo/>
                </button>

                <button className="remove-task-button" 
                onClick={()=> 
                handleTaskDelete(task.id)}>
                    
                    <CgClose/>
                </button>

                

            </div>

        </div>
        </>
    );
};
 
export default Task;