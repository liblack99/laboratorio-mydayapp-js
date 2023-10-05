import { taskManager } from "../taskManager";

export function editTaskName(event) {
  const li = event.target.closest("li");
  const taskName = li.querySelector("label");
  const editInput = li.querySelector(".edit");
  const id = li.dataset.id;
  const tasks = taskManager();

  li.classList.add("editing");
  taskName.style.display = "none";
  editInput.style.display = "block";
  editInput.focus();

  editInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      const newTaskName = editInput.value.trim();
      taskName.textContent = newTaskName;
      li.classList.remove("editing");
      taskName.style.display = "block";
      editInput.style.display = "none";
      tasks.editTask(id, newTaskName);
    } else if (event.key === "Escape") {
      li.classList.remove("editing");
      taskName.style.display = "block";
      editInput.style.display = "none";
    }
  });
}
