import React, { useContext } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import {AppContext} from '../context/context';

const Progress = ({speed}) => {
    const { tasks } = useContext(AppContext);

    let taskList = tasks.map((task) => 
        <div className = "elem">
            {<ProgressBar now = {task.current} max = {15}  />}
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