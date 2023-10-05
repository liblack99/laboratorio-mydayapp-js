import { taskManager } from "../taskManager";
import { updateTaskCounter } from "./tasksCounter";

export function toggleTaskCompletion(event) {
  const tasks = taskManager();
  const li = event.target.closest("li");
  const taskId = li.dataset.id;

  if (event.target.checked) {
    li.classList.add("completed");
    tasks.completedTask(taskId, true);
  } else {
    li.classList.remove("completed");
    tasks.completedTask(taskId, false);
  }
  updateTaskCounter();
}
