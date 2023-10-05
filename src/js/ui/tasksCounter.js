import { taskManager } from "../taskManager";
import { tasksCount, clearCompletedTasksBtn } from "../../index";
import { isTasks } from "./isTask";

export function updateTaskCounter() {
  const taskList = taskManager();
  const tasksPending = taskList.getPendingTask();
  const tasksCompleted = taskList.getCompletedTask();
  if (tasksCompleted.length > 0) {
    clearCompletedTasksBtn.classList.remove("hidden");
  } else {
    clearCompletedTasksBtn.classList.add("hidden");
    isTasks();
  }

  if (tasksPending.length === 0) {
    tasksCount.innerHTML = `<strong>${tasksPending.length}</strong> items left`;
  } else if (tasksPending.length === 1) {
    tasksCount.innerHTML = `<strong>${tasksPending.length}</strong> item left`;
  } else {
    tasksCount.innerHTML = `<strong>${tasksPending.length}</strong> items left`;
  }
}
