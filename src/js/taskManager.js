let tasks = JSON.parse(localStorage.getItem("mydayapp-js")) || [];
export const taskManager = () => {
  const saveTasksToLocalStorage = () => {
    localStorage.setItem("mydayapp-js", JSON.stringify(tasks));
  };

  return {
    addTask(id, title, completed) {
      const newTask = {
        id: id,
        title: title,
        completed: completed,
      };
      tasks.push(newTask);
      saveTasksToLocalStorage();
      return tasks;
    },
    getTasks() {
      return tasks;
    },

    deleteTask(id) {
      const index = tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        tasks.splice(index, 1);
        saveTasksToLocalStorage();
      }
    },

    completedTask(id, newCompleted) {
      const taskToEdit = tasks.find((task) => task.id === id);

      if (taskToEdit !== undefined) {
        taskToEdit.completed = newCompleted;
        saveTasksToLocalStorage();
      }
    },

    editTask(id, newTitle) {
      const taskToEdit = tasks.find((task) => task.id === id);

      if (taskToEdit) {
        taskToEdit.title = newTitle;
        saveTasksToLocalStorage();
      }
    },
    getPendingTask() {
      const pendingTasks = tasks.filter((task) => task.completed === false);
      return pendingTasks;
    },
    getCompletedTask() {
      const completedTasks = tasks.filter((task) => task.completed === true);
      return completedTasks;
    },
  };
};
