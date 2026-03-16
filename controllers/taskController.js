// this layer is reposnsible for handling the request and response of the task related operations, it will call the service layer to perform the necessary operations and send the appropriate response back to the client
const taskService = require("../services/taskService");

async function getTasks(req, res) {
  const tasks = await taskService.getTasks();
  res.json(tasks);
}

async function getTask(req, res) {
  try {
    const task = await taskService.getTask(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function createTask(req, res) {
  try {
    const task = await taskService.createTask(req.body.title);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateTask(req, res) {
  await taskService.updateTask(req.params.id, req.body.completed);
  res.json({ message: "Task updated successfully" });
}

async function deleteTask(req, res) {
  await taskService.deleteTask(req.params.id);
  res.json({ message: "Task deleted successfully" });
}

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
