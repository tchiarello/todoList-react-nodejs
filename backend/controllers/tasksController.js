const TasksService = require('../services/tasksService');

const createTask = async (req, res, next) => {
  try {
    const { task } = req.body;

    const newTask = await TasksService.createTask({ task });

    return res.status(201).json(newTask);
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

const getAllTasks = async (_req, res, next) => {
  try {
    const allTasks = await TasksService.getAllTasks();

    return res.status(200).json({
      allTasks,
    });
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

const updateTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { task } = req.body;

    const taskItem = await TasksService.updateTaskById({ id, task });

    return res.status(200).json(taskItem);
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

const deleteTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const taskItem = await TasksService.deleteTaskById(id);

    return res.status(200).json(taskItem);
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateTaskById,
  deleteTaskById,
};
