import { toggleTaskCompletion } from "./toggleTaskCompletion";
import { deleteTask } from "./deleteTasks";
import { editTaskName } from "./editTaskName";

const template = (id, title, completed) => {
  const taskItem = document.createElement("li");
  if (completed) {
    taskItem.classList.add("completed");
  }
  taskItem.dataset.id = id;
  const div = document.createElement("div");
  div.classList.add("view");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("toggle");
  completed ? (checkbox.checked = true) : (checkbox.checked = false);
  checkbox.addEventListener("change", toggleTaskCompletion);

  const taskName = document.createElement("label");
  taskName.textContent = title;
  taskName.classList.add("task");
  taskName.addEventListener("dblclick", editTaskName);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("destroy");

  deleteButton.addEventListener("click", deleteTask);
  const input = document.createElement("input");
  input.setAttribute("class", "edit");
  input.setAttribute("value", title);

  taskItem.appendChild(div);
  taskItem.appendChild(input);
  div.appendChild(checkbox);
  div.appendChild(taskName);
  div.appendChild(deleteButton);
  return taskItem;
};
export default template;
