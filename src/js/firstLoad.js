import { taskManager } from "./taskManager";
import { main, footer } from "../index";
import { isTasks } from "./ui/isTask";
import { updateTaskCounter } from "./ui/tasksCounter";
import { render } from "./ui/render";

export function firstLoad() {
  const tasksAll = taskManager();
  const tasks = tasksAll.getTasks();
  if (!tasks || tasks.length === 0) {
    main.classList.add("hidden");
    footer.classList.add("hidden");
  } else {
    main.classList.remove("hidden");
    footer.classList.remove("hidden");
    isTasks();
    render();
  }
  updateTaskCounter();

  window.removeEventListener("load", firstLoad);
}
