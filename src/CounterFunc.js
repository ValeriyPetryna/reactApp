import React, { useState, useEffect } from 'react'

const CounterFunc = ({speed, name}) => {
    const [time, setTime] = useState(0)
    const changeTick = () => {
        setTime(time +1)
    }
    
    useEffect(() => {
        const tick = setInterval(() => {
            changeTick()
        }, speed, [])
        return () => clearInterval(tick)
    })
    return (
        <div className = "elem">
            <h2> {name} </h2>
            <h2> {time} </h2>
        </div>
    )
}

export default CounterFunc