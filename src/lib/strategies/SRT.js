import { increment } from '../increment';

export function SRT (filteredTasks, setTasks, taskId, setTaskId) {
  // SRT - shortest remaining time
  // SRT - выполняешь самую короткую до конца

  const findShortest = filteredTasks.reduce(function (p, v) {
    return ( p.threshold <= v.threshold ? p : v );
  });
  const previousTask = taskId ? taskId : findShortest.id;
  const taskIndex = filteredTasks.findIndex((t) => t.id === previousTask);
  const currentTaskId = taskId && filteredTasks[taskIndex] && filteredTasks[taskIndex].id == taskId ? taskId : findShortest.id;

  setTaskId(currentTaskId)
  setTasks(increment(filteredTasks, currentTaskId));
}