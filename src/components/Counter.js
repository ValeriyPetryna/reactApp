import React, { useContext } from 'react';
import {AppContext} from '../context/context';

const Counter = ({ name }) => {
    const { counter } = useContext(AppContext);
    
    return (
        <div className = "elem">
            <h2> {name} </h2>
            <h2> {counter} </h2>
        </div>
    );
}

export default Counter;