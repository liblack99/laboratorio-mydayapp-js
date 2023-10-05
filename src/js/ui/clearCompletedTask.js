import { taskManager } from "../taskManager";
import { updateTaskCounter } from "./tasksCounter";
import { taskList } from "../..";
const tasks = taskManager();
export function clearCompletedTasks() {
  const completedTasks = taskList.querySelectorAll("li");
  completedTasks.forEach((task) => {
    const checkbox = task.querySelector(".toggle");
    const taskId = task.dataset.id;
    if (checkbox.checked) {
      task.remove();
      tasks.deleteTask(taskId);
    }
  });
  updateTaskCounter();
}
