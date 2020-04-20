import React, { useContext } from 'react';
import {AppContext} from '../context/context';

const ResolvedTasks = ({ name }) => {
    const { resolved } = useContext(AppContext);
    
    return (
        <div className = "elem">
            <h2> {name} </h2>
            <h2> {resolved} </h2>
        </div>
    );
}

export default ResolvedTasks;