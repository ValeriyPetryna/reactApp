
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function randomTask (tasks) {
  const task = {
    threshold: Math.floor((Math.random() * 25) + 1),
    current: 0,
    index: tasks.length,
    id: uuidv4(),
  };

  if (tasks.length < 7) {
    tasks.push(task);
  }

  return tasks;
}

export function useTaskSpawner (counter, setTasks, tasks) {
  useEffect(() => {
    if (counter % 10 === 0) {
      setTasks(randomTask(tasks));
    }
  }, [counter]);
}
