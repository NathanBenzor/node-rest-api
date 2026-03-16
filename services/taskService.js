// this is where the business logic of the application will be implemented, it will call the repository to interact with the database and perform the necessary operations
const taskRepository = require("../repositories/taskRepository");

async function getTasks() {
  // This function retrieves all tasks by calling the repository function
  // the actual db query is handled in the repository, this service function can also include additional business logic if needed
  return await taskRepository.getAllTasks();
}

async function getTask(id) {
  // This function retrieves a specific task by its ID by calling the repository function
  const task = await taskRepository.getTaskById(id);
  if (!task) {
    throw new Error("Task not found");
  }
  return task;
}

async function createTask(title) {
  // This function creates a new task by calling the repository function
  if (!title) {
    throw new Error("Title is required");
  }
  return await taskRepository.creatTask(title);
}

async function updateTask(id, completed) {
  // This function updates the completion status of a task by calling the repository function
  return await taskRepository.updateTaskl(id, completed);
}

async function deleteTask(id) {
  // This function deletes a task by its ID by calling the repository function
  await taskRepository.deleteTask(id);
}

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
