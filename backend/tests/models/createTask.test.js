const { expect } = require('chai');

const TasksModel = require('../../models/tasksModel');

describe('Insert a new task in database', () => {
  const payloadTask = {
    task: 'Example Task',
  };

  describe('if successfully inserted', () => {
    it('should return an object', async () => {
      const response = await TasksModel.createTask(payloadTask);

      expect(response).to.be.a('object');
    });

    it('should have the "id" of the new inserted task', async () => {
      const response = await TasksModel.createTask(payloadTask);

      expect(response).to.have.a.property('_id');
    });
  });
});
