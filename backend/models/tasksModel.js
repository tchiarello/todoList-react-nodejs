const { ObjectId } = require('mongodb');
const mongoConnection = require('./mongoConnection');

const createTask = async ({ task }) => {
  const db = await mongoConnection();
  const tasksCollection = db.collection('tasks');

  const { insertedId: _id } = await tasksCollection.insertOne({ task });

  return { _id, task };
};

const getAllTasks = async () => {
  const db = await mongoConnection();
  const tasksCollection = await db.collection('tasks').find().toArray();

  return tasksCollection;
};

const getTaskById = async (id) => {
  const db = await mongoConnection();
  const task = await db.collection('tasks').findOne({ _id: ObjectId(id) });

  return task;
};

const updateTaskById = async (id, payload) => {
  const db = await mongoConnection();
  const result = await db
    .collection('tasks')
    .updateOne({ _id: ObjectId(id) }, { $set: payload });

  return result;
};

const deleteTaskById = async (id) => {
  const db = await mongoConnection();
  const result = await db.collection('tasks').deleteOne({ _id: ObjectId(id) });

  return result;
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};
