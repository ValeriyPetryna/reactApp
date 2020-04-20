import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import { FCFS } from '../lib/strategies/FCFS';
import { LCFS } from '../lib/strategies/LCFS';
import { RR } from '../lib/strategies/RR';
import { SJN } from '../lib/strategies/SJN';
import { SRT } from '../lib/strategies/SRT';
import { increment } from '../lib/increment';
import { useCounter } from '../hooks/useCounter';
import { useTaskSpawner } from '../hooks/useTaskSpawner';

export const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      threshold: 7,
      current: 1,
      index: 0,
      id: uuidv4(),
    },
    {
      threshold: 15,
      current: 1,
      index: 1,
      id: uuidv4(),
    },
    {
      threshold: 10,
      current: 1,
      index: 2,
      id: uuidv4(),
    },
    {
      threshold: 15,
      current: 1,
      index: 3,
      id: uuidv4(),
    },
  ]);
  
  const [resolved, setResolved] = useState(0);
  const [taskId, setTaskId] = useState(null);
  const [strategy, setStrategy] = useState('FCFS');
  const counter = useCounter();
  useTaskSpawner();

  //strategy
  useEffect(() => {
    setTaskId(null)
  }, [strategy]);

  // Tasks handler
  useEffect(() => {
    const filteredTasks = tasks.filter(task => task.current < task.threshold);
    if (filteredTasks.length < tasks.length) {
      setResolved(resolved + 1);
    }

    switch(strategy) {
      case 'FCFS':
        return FCFS(filteredTasks, setTasks, taskId, setTaskId);
      case 'LCFS':
        return LCFS(filteredTasks, setTasks, taskId, setTaskId);
      case 'RR':
        return RR(filteredTasks, setTasks, taskId, setTaskId);
      case 'SRT':
        return SRT(filteredTasks, setTasks, taskId, setTaskId);
      case 'SJN':
        return SJN(filteredTasks, setTasks, taskId, setTaskId);
      default:
        return FCFS(filteredTasks, setTasks);
    }
  }, [counter]);

  const context = {tasks, resolved, counter, strategy, setStrategy};
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}