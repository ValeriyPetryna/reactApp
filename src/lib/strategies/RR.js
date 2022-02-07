import { increment } from '../increment';

export function RR (filteredTasks, setTasks, taskId, setTaskId) {
  const currentTaskId = !taskId ? filteredTasks[0].id : taskId;

  setTasks(increment(filteredTasks, currentTaskId));

  const taskIndex = filteredTasks.findIndex((t) => t.id === currentTaskId);
  if (taskIndex === filteredTasks.length - 1) {
    setTaskId(filteredTasks[0].id);
  } else {
    setTaskId(filteredTasks[taskIndex + 1].id);
  }
}
