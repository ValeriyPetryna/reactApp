export function increment(tasks, taskId) { 
  const task = tasks.find((t) => t.id === taskId);

  task.current += 1;

  return tasks;
}
