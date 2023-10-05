import { taskManager } from "../taskManager";
import { taskInput } from "../..";
import { render } from "./render";
import { updateTaskCounter } from "./tasksCounter";
export function addTaskList() {
  const tasks = taskManager();
  const taskText = taskInput.value.trim();
  const id = Date.now().toString();
  if (taskText === "") {
    return;
  }
  tasks.addTask(id, taskText, false);
  render();
  updateTaskCounter();

  taskInput.value = "";
}
