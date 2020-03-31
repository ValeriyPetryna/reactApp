import React, { useState, useEffect, useContext } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import {AppContext} from './context/context';

const Progress = ({speed}) => {
    const value = useContext(AppContext);
    const tasks = value;

    let taskList = tasks.map((task) => 
        <div className = "elem">
            {<ProgressBar now = {task.current}  />}
        </div>
    )

    return (
        <div className = "elem">
            {taskList}
        </div>
    )
}

export default Progress;