import React, { useContext } from 'react';
import {AppContext} from '../context/context';

const ActiveTasks = ({ name }) => {
    const { tasks } = useContext(AppContext);
    
    return (
        <div className = "elem">
            <h2> {name} </h2>
            <h2> {tasks.length} </h2>
        </div>
    );
    
}

export default ActiveTasks;