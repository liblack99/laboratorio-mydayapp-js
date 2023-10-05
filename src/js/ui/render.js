import { taskManager } from "../taskManager";
import { taskList, all, pending, completed } from "../..";
import { isTasks } from "./isTask";
import template from "./template";

export function render() {
  taskList.innerHTML = "";
  const tasks = taskManager();
  const tasksAll = tasks.getTasks();
  isTasks();

  if (tasksAll.length > 0) {
    tasksAll.forEach((task) => {
      const taskElement = template(task.id, task.title, task.completed);
      taskList.appendChild(taskElement);
    });
  }

  if (location.hash.startsWith("#/pending")) {
    taskList.innerHTML = "";
    all.remove("selected");
    pending.add("selected");
    completed.remove("selected");
    const tasksPending = tasks.getPendingTask();
    tasksPending.forEach((task) => {
      const taskElement = template(task.id, task.title, task.completed);
      taskList.appendChild(taskElement);
    });
  } else if (location.hash.startsWith("#/completed")) {
    taskList.innerHTML = "";
    all.remove("selected");
    pending.remove("selected");
    completed.add("selected");
    const tasksCompleted = tasks.getCompletedTask();
    tasksCompleted.forEach((task) => {
      const taskElement = template(task.id, task.title, task.completed);
      taskList.appendChild(taskElement);
    });
  } else {
    taskList.innerHTML = "";
    all.add("selected");
    pending.remove("selected");
    completed.remove("selected");
    tasksAll.forEach((task) => {
      const taskElement = template(task.id, task.title, task.completed);
      taskList.appendChild(taskElement);
    });
  }
}
