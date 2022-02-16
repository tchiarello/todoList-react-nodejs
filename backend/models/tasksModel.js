// const { ObjectId } = require('mongodb');
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

module.exports = {
  createTask,
  getAllTasks,
};
