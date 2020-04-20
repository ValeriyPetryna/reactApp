import React, { useContext } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import {AppContext} from '../context/context';

const Progress = () => {
    const { tasks } = useContext(AppContext);

    let taskList = tasks.map((task) => 
        <div key={task.index.toString()} className = "elem">
            {<ProgressBar now = {task.current} max = {task.threshold} label={`${task.threshold}`}  />}
            <p>{task.current}</p>
        </div>
    )
    if (taskList.length) {
        return (
            <div className = "elem">
                {taskList}
            </div>
        )
    } 
}

export default Progress;