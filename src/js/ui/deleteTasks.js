import { taskManager } from "../taskManager";
import { updateTaskCounter } from "./tasksCounter";

export function deleteTask(event) {
  const tasks = taskManager();
  const taskItem = event.target.closest("li");
  const id = taskItem.dataset.id;
  if (taskItem) {
    taskItem.remove();
    tasks.deleteTask(id);
  }
  updateTaskCounter();
}
