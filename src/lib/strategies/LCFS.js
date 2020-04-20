import { increment } from '../increment';

export function LCFS (filteredTasks, setTasks) {
  setTasks(increment(filteredTasks, filteredTasks[filteredTasks.length - 1].id));
}