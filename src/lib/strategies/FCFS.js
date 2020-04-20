import { increment } from '../increment';

export function FCFS (filteredTasks, setTasks) {
  setTasks(increment(filteredTasks, filteredTasks[0].id));
}