const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO_DB_URL = `mongodb://${'localhost' || 'mongodb'}:27017/todoList`;
const DB_NAME = 'todoList';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = async () => {
  try {
    const connection = await MongoClient.connect(MONGO_DB_URL, OPTIONS);
    return await connection.db(DB_NAME);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
