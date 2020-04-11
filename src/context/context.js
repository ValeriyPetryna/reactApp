import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();

function useCounter () {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => { 
      setCounter(counter + 1)
    }, 3000);
    return () => { 
      clearTimeout(timer);
    }
  }, [counter])

  return counter;
}

function incrementLast(tasks) { 
  tasks[tasks.length -1].current = tasks[tasks.length -1].current + 1;

  return tasks;
}

function randomTask (tasks) {
  const task = {
    current: Math.floor((Math.random() * 14) + 1),
    threshold: 15
  };

  if (tasks.length < 7) {
    tasks.push(task);
  }

  return tasks;
}
export function AppContextProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      threshold: 15,
      current: 5
    },
    {
      threshold: 15,
      current: 1
    },
    {
      threshold: 15,
      current: 0
    },
    {
      threshold: 15,
      current: 3
    }
  ]);
  
  const [resolved, setResolved] = useState(-1);
  // Counter 
  const counter = useCounter();

  // Tasks handler
  useEffect(() => {
    const filteredTasks = tasks.filter(task => task.current <= task.threshold);
    setTasks(incrementLast(filteredTasks));
  }, [counter]);

  // Resolved tasks
  useEffect(() => {
    setResolved(resolved +1);
  }, [tasks.length]);

  // create new random task
  useEffect(() => {
    const interval = setInterval(() => setTasks(randomTask(tasks)), 5000);
    return () => clearInterval(interval);
  }, []);

  const context = {tasks, resolved, counter}
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

  


// RR logic
//const incrementCurrent = obj => ({ ...obj, current: obj.current + 5 });
// const logic = params => {
  //   switch(params) {
  //     case 'LCFS':
  //       return '';
  //     default:
  //       return '';
  //   }
  // }