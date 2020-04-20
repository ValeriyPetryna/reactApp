import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();

function useCounter () {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => { 
      setCounter(counter + 1)
    }, 500);
    return () => { 
      clearTimeout(timer);
    }
  }, [counter])

  return counter;
}

function FCFS (filteredTasks, setTasks, setTaskId) {
  // first come first serve
  setTasks(increment(filteredTasks, 0, setTaskId));
}

function LCFS (filteredTasks, setTasks, setTaskId) {
  // last come first serve
  setTasks(increment(filteredTasks, filteredTasks.length - 1, setTaskId));
}

function RR (filteredTasks, setTasks, taskId, setTaskId) {
  // RR
  setTasks(increment(filteredTasks, taskId, setTaskId));
  if (taskId < filteredTasks.length - 1) {
    setTaskId(taskId + 1)
  } else if (taskId >= filteredTasks.length - 1) {
    setTaskId(0)
  }
}

function SJN (filteredTasks, setTasks, setTaskId) {
  // SJN - shortest job next
  // SJN - можно перейти на более короткую таску
  let shortestTask = filteredTasks.reduce(function (p, v) {
    return ( p.threshold < v.threshold ? p : v);
  });
  setTasks(increment(filteredTasks, shortestTask.index, setTaskId));
}

function SRT (filteredTasks, setTasks, setTaskId) {
  // SRT - shortest remaining time
  // SRT - выполняешь самую короткую до конца
  let shortestTask = filteredTasks.reduce(function (p, v) {
    return ( p.threshold <= v.threshold ? p : v );
  });
  setTasks(increment(filteredTasks, shortestTask.index, setTaskId));
}


function increment(tasks, i, setTaskId) { 
  if(tasks.length && tasks[i]) {
    tasks[i].current = tasks[i].current + 1;
    setTaskId(i);
  } else setTaskId(0);

  return tasks;
}

function getIndex (tasks, i) {
  tasks[i].index = i;
  
  return tasks;
}

function randomTask (tasks) {
  const task = {
    threshold: Math.floor((Math.random() * 25) + 1),
    current: 0,
    id: tasks.length
  };
  if (tasks.length < 7) {
    tasks.push(task);
  }

  return tasks;
}

export function AppContextProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      threshold: 7,
      current: 1,
      index: 0
    },
    {
      threshold: 15,
      current: 1,
      index: 1
    },
    {
      threshold: 10,
      current: 1,
      index: 2
    },
    {
      threshold: 15,
      current: 1,
      index: 3
    }
  ]);
  
  const [resolved, setResolved] = useState(-1);
  const [taskId, setTaskId] = useState(0);
  const [strategy, setStrategy] = useState('RR');
  const counter = useCounter();

  //strategy
  useEffect(() => {
    setTaskId(0)
  }, [strategy]);

  // Tasks handler
  useEffect(() => {
    const filteredTasks = tasks.filter(task => task.current < task.threshold);
    if (filteredTasks.length < tasks.length) {
      setResolved(resolved +1);
    }
    switch(strategy) {
      case 'FCFS':
        return FCFS(filteredTasks, setTasks, setTaskId);
      case 'LCFS':
        return LCFS(filteredTasks, setTasks, setTaskId);
      case 'RR':
        return RR(filteredTasks, setTasks, taskId, setTaskId);
      case 'SRT':
        return SRT(filteredTasks, setTasks, setTaskId);
      case 'SJN':
        return SJN(filteredTasks, setTasks, setTaskId);
      default:
        return FCFS(filteredTasks, setTasks, setTaskId);
    }
  }, [counter]);

  // Task indexes
  useEffect(() => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].index != i) {
        setTasks(getIndex(tasks, i));
      }
    }
  }, [tasks.length]);

  // create new random task
  useEffect(() => {
    if (counter % 10 == 0) {
      setTasks(randomTask(tasks))
    }
  }, [counter]);

  const context = {tasks, resolved, counter, strategy, setStrategy}
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}