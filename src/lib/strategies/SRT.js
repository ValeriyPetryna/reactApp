import { increment } from '../increment';

export function SRT (filteredTasks, setTasks, taskId, setTaskId) {
    // SRT - shortest remaining time
    // SRT - выполняешь самую короткую до конца
    
    const shortestTask = filteredTasks.reduce(function (p, v) {
      return ( p.threshold <= v.threshold ? p : v );
    });
   // const currentTaskId = filteredTasks[shortestTask.id] ? filteredTasks[0].id : taskId;
    if (filteredTasks[shortestTask.id]) {
      //
    }
    setTasks(increment(filteredTasks, shortestTask.id));
  }