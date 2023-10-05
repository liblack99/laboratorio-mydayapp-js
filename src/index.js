import "./css/base.css";
import { addTaskList } from "./js/ui/addTask";
import { render } from "./js/ui/render";
import { firstLoad } from "./js/firstLoad";
import { clearCompletedTasks } from "./js/ui/clearCompletedTask";
export const main = document.querySelector(".main");
export const footer = document.querySelector(".footer");
export const taskList = document.querySelector(".todo-list");
export const taskInput = document.querySelector(".new-todo");
export const clearCompletedTasksBtn =
  document.querySelector(".clear-completed");
export const tasksCount = document.querySelector(".todo-count");
export const filters = document.querySelector(".filters");
export const all = filters.children[0].lastElementChild.classList;
export const pending = filters.children[1].lastElementChild.classList;
export const completed = filters.children[2].lastElementChild.classList;

taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTaskList();
  }
});
clearCompletedTasksBtn.addEventListener("click", clearCompletedTasks);
window.addEventListener("hashchange", render, false);
window.addEventListener("load", firstLoad);
