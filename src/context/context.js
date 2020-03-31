import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      threshold: 100,
      current: 5
    },
    {
      threshold: 100,
      current: 65
    },
    {
      threshold: 100,
      current: 80
    },
    {
      threshold: 100,
      current: 45
    }
  ]);
  const [counter, setCounter] = useState(1);
  
  // Counter
  useEffect(() => {
    const interval = setInterval(() => setCounter(counter + 1), 1000);
    return () => clearInterval(interval);
  });

  const incrementCurrent = obj => ({ ...obj, current: obj.current + 5 });

  const filteredTasks =  tasks.filter(task => task.current <= task.threshold)
  console.log(filteredTasks)

  //Tasks handler
  useEffect(() => {
    setTasks(tasks.map(incrementCurrent));
  }, [counter]);

  return <AppContext.Provider value={filteredTasks}>{children}</AppContext.Provider>;
}
