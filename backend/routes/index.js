const express = require('express');
const router = express.Router();

const {
  createTask,
  getAllTasks,
  updateTaskById,
  deleteTaskById,
} = require('../controllers/tasksController');

router.get('/tasks', getAllTasks);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTaskById);
router.delete('/tasks/:id', deleteTaskById);

module.exports = router;
