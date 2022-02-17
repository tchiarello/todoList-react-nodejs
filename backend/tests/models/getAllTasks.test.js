const { expect } = require('chai');

const TasksModel = require('../../models/tasksModel');

describe('Get all tasks from the database', () => {
  const payloadTasks = {
    allTasks: [
      {
        _id: '123',
        task: 'Example Task',
      },
      {
        _id: 'abc',
        task: 'Example Task',
      },
    ],
  };

  describe('if success', () => {
    it('should return an array of objects', async () => {
      const response = await TasksModel.getAllTasks(payloadTasks);

      expect(response).to.be.a('array');
    });
  });
});
