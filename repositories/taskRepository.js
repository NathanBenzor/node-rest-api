// this is where all the database queries related to tasks will be defined and exported for use in the controllers
const db = require("../db/connection");

async function getAllTasks() {
  // This function retrieves all tasks from the database
  const [rows] = await db.query("SELECT * FROM tasks");
  return rows;
}

async function getTaskById(id) {
  // This function retrieves a specific task by its ID
  const [rows] = await db.query("SELECT * FROM tasks WHERE id = ?", [id]);
  return rows[0];
}

async function creatTask(title) {
  // This function creates a new task with the given title
  const [result] = await db.query("INSERT INTO tasks (title) VALUES (?)", [
    title,
  ]);
  return { id: result.insertId, title };
}

async function updateTaskl(id, completed) {
  // This function updates the completion status of a task
  await db.query("UPDATE tasks SET completed = ? WHERE id = ?", [
    completed,
    id,
  ]);
  return getTaskById(id);
}

async function deleteTask(id) {
  // This function deletes a task by its ID
  await db.query("DELETE FROM tasks WHERE id = ?", [id]);
}

module.exports = {
  getAllTasks,
  getTaskById,
  creatTask,
  updateTaskl,
  deleteTask,
};
