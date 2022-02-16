const TasksModel = require('../models/tasksModel');
const errorHandler = require('../utils/errorHandler');
const Joi = require('joi');

const validationSchema = Joi.object({
  task: Joi.string().required().messages({
    'string.any': 'Task is required',
  }),
});

const createTask = async ({ task }) => {
  const { error } = validationSchema.validate({ task });
  if (error) throw errorHandler(422, error.message);

  const newTask = await TasksModel.createTask({ task });
  return newTask;
};

const getAllTasks = async () => {
  const allTasks = await TasksModel.getAllTasks();
  return allTasks;
};

const updateTaskById = async (id, payload) => {
  await TasksModel.updateTaskById(id, payload);
  return { _id: id, ...payload };
};

const deleteTaskById = async (id) => {
  const taskItem = await TasksModel.deleteTaskById(id);
  return taskItem;
};

module.exports = {
  createTask,
  getAllTasks,
  updateTaskById,
  deleteTaskById,
};
