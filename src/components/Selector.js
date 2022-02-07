import React, { useState, useContext, useEffect } from 'react';
import {AppContext} from '../context/context';

const StrategySelector = ({speed}) => {
    const { strategy, setStrategy } = useContext(AppContext);
    const [currentStrategy, setCurrentStrategy] = useState(strategy);
    const availableStrategies = ['FCFS','LCFS','RR','SJN','SRT','Custom'];
    
    useEffect(() => {
      setCurrentStrategy(strategy);
    }, [strategy]);

    const strategyList = availableStrategies.map((strategy) => 
      <label key={strategy}>
        <input type="radio" name="strategy" value = {strategy} checked={strategy === currentStrategy} onChange={() => setStrategy(strategy)} /> {strategy}
      </label>
    )
    if (strategyList.length) {
        return (
            <div className = "radio">
                {strategyList}
            </div>
        )
    } 
}


export default StrategySelector;
