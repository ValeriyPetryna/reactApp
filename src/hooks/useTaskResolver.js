import { useEffect } from 'react';

export function useTaskResolver (counter, tasks, setTasks) {
  useEffect(() => {
    const filteredTasks = tasks.filter(task => task.current < task.threshold);

    console.log('TASKS', tasks)
    console.log('FILTERED', filteredTasks)

    setTasks(filteredTasks);
  }, [counter]);
}