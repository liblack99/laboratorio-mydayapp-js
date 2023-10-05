import { footer, main } from "../..";
import { taskManager } from "../taskManager";

export function isTasks() {
  const tasks = taskManager();
  const tasksAll = tasks.getTasks();

  if (!tasksAll || tasksAll.length === 0) {
    footer.classList.add("hidden");
    main.classList.add("hidden");
  } else {
    footer.classList.remove("hidden");
    main.classList.remove("hidden");
  }
}
