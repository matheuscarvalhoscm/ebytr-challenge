const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { getConnection } = require('./mockConnection');
const taskModel = require('../models/taskModel');

const dbName = 'ebytr-challenge';
const collection = 'tasks';

describe('Test task models functions', () => {
  let connectionMock;

  const insertion = {
    task: 'Implement Unit Tests',
  };

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    await connectionMock.db(dbName).collection(collection).drop();
    MongoClient.connect.restore();
    sinon.reset();
  });

  describe('When creating a task', () => {
    it('return an object', async () => {
      const { task } = insertion;
      const response = await taskModel.create(task);

      expect(response).to.be.a('object');
    });

    it('The object returned has properties "id and task"', async () => {
      const { task } = insertion;
      const response = await taskModel.create(task);

      expect(response).to.have.a.property('id');
      expect(response).to.have.a.property('task');
    });

    it('The task must be registered', async () => {
      const { task } = insertion;
      await taskModel.create(task);

      const response = await connectionMock
        .db(dbName)
        .collection(collection)
        .findOne({ task: insertion.task });

      expect(response).to.be.not.null;
      expect(response).to.have.a.property('_id');
      expect(response).to.have.a.property('task');
      expect(response).to.have.a.property('status');
      expect(response).to.have.a.property('createdAt');
    });
  });

  describe('When getting all tasks', () => {
    it('Should return an array', async () => {
      await taskModel.getAll();

      const response = await connectionMock
        .db(dbName)
        .collection(collection)
        .find()
        .toArray();

      expect(response).to.be.a('array');
      expect(response).to.have.length.greaterThan(0);
    });
  });

  describe('When updating a task', () => {
    it('Should update the task with the informed id', async () => {
      const { task } = insertion;
      const { id } = await taskModel.create(task);
      const updatedTask = 'Implement Integration Tests';

      await connectionMock
        .db(dbName)
        .collection(collection)
        .findOneAndUpdate({ _id: id }, { $set: { task: updatedTask } });

      await taskModel.getAll();

      const response = await connectionMock
        .db(dbName)
        .collection(collection)
        .find({ _id: id })
        .toArray();

      expect(response[0].task).to.be.equal(updatedTask);
    });
  });
  describe('When deleting a task', () => {
    it('Should not return the task with the informed id', async () => {
      const { task } = insertion;
      const { id } = await taskModel.create(task);
      await taskModel.deleteTask(id);

      await connectionMock
        .db(dbName)
        .collection(collection)
        .deleteOne({ _id: id });

      await taskModel.getAll();

      const response = await connectionMock
        .db(dbName)
        .collection(collection)
        .find({ _id: id })
        .toArray();

      const taskStillExist = response.some((task) => task._id === id);

      expect(taskStillExist).to.be.equal(false);
    });
  });
});
