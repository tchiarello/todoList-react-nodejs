const { expect } = require('chai');

const ServiceModel = require('../../services/tasksService');

describe('Insert a new task in database', () => {
  const payloadTask = {};

  describe('when the payload is not valid', () => {
    it('should return an error', async () => {
      const response = await ServiceModel.createTask(payloadTask);

      expect(response).to.throw('"task" is required');
    });
  });
});
