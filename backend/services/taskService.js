const Joi = require('joi');
const taskModel = require('../models/taskModel');

const createTaskSchema = Joi.object({
  task: Joi.string().required().messages({
    // ref to create custom error messages: https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages
    'string.base': 'Your task must be a text.',
    'string.empty': 'Impossible to add an empty task.',
  }),
});

const create = async (task) => {
  const { error } = createTaskSchema.validate({ task });

  if (error) throw error;

  const createdTask = await taskModel.create(task);

  return createdTask;
};

const getAll = async () => {
  const allTasks = await taskModel.getAll();

  return allTasks;
};

const update = async (id, task, status) => {
  const { error } = createTaskSchema.validate({ task });

  if (error) throw error;

  const updatedTask = await taskModel.update(id, task, status);

  return updatedTask;
};

const deleteTask = async (id) => {
  const deletedTask = await taskModel.deleteTask(id);

  return deletedTask;
};

module.exports = {
  create,
  getAll,
  update,
  deleteTask,
};
