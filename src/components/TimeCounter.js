import React, { useState, useEffect } from 'react';

const TimeCounter = ({ name }) => {
    const [time, setTime] = useState(0);

    // Timer New Date
    useEffect(() => {
      const interval = setInterval(() => setTime(time + 1), 1000);
      return () => clearInterval(interval);
    })

    return (
        <div className = "elem">
            <h2> {name} </h2>
            <h2> {time} </h2>
        </div>
    );
}

export default TimeCounter;