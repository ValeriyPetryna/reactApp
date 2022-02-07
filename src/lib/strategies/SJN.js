import { increment } from '../increment';

// SJN - shortest job next
// SJN - можно перейти на более короткую таску
export function SJN (filteredTasks, setTasks, taskId, setTaskId) {
  const shortestTask = filteredTasks.reduce((acc, task) => {
    if (acc.threshold > task.threshold) {
      return task;
    }

    return acc;
  }, filteredTasks[0]);

  setTasks(increment(filteredTasks, shortestTask.id));
}