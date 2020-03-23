import React, { useState, useEffect } from 'react'

const CounterFunc = props => {
    const [time, setTime] = useState(0)

    const changeTick = () => {
        setTime(time +1)
    }

    useEffect(() => {
        const tick = setInterval(() => {
            changeTick()
        }, props.speed)
        return () => clearInterval(tick)
    })
    return (
        <div>
            <h2>It is func ticker with speed {props.speed}:  {time}.</h2>
        </div>
    )
}

export default CounterFunc