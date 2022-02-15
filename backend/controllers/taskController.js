const taskService = require('../services/taskService');

const create = async (req, res) => {
  try {
    const { task } = req.body;
    const createdTask = await taskService.create(task);

    return res.status(201).json(createdTask);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const getAll = async (_req, res) => {
  const allTasks = await taskService.getAll();

  return res.status(200).json(allTasks);
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { task, status } = req.body;
    const updatedTask = await taskService.update(id, task, status);

    return res.status(200).json(updatedTask);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const deletedTask = await taskService.deleteTask(id);

  return res.status(200).json(deletedTask);
};

module.exports = {
  create,
  getAll,
  update,
  deleteTask,
};
