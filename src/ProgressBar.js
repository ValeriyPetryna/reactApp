import React, { useState, useEffect } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Progress = ({speed}) => {
    const [progress, setProgress] = useState(0)
    const changeProgress = () => {
        setProgress(progress + speed)
    }
    const clearProgress = () => {
        setProgress(0)
    }
    
    useEffect(() => {
        const tick = setInterval(() => {
            changeProgress()
        }, 1000)
        
        return () => {
            if(progress >= 100) {
                clearProgress()
            }
            clearInterval(tick)
        } 
    })
    
    const progressInstance = <ProgressBar now = {progress}  />;

    return (
        <div className = "elem">
            {progressInstance}
        </div>
    )
}

export default Progress