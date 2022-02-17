const { ObjectId } = require('mongodb');
const conn = require('./connection');

const create = async (task) => {
  const db = await conn();
  const { insertedId: id } = await db.collection('tasks').insertOne(
    {
      task,
      status: 'Pendente',
      createdAt: new Date().toUTCString(),
    },
  );

  return { id, task };
};

const getAll = async () => {
  const db = await conn();
  const allTasks = await db.collection('tasks').find().toArray();

  return allTasks;
};

const update = async (id, task, status) => {
  const db = await conn();
  const updatedTask = await db.collection('tasks').updateOne(
    { _id: ObjectId(id) },
    { $set: { task, status } },
  );

  return { id, task, status };
};

const deleteTask = async (id) => {
  const db = await conn();
  const deletedTask = await db.collection('tasks').findOne({ _id: ObjectId(id) });
  await db.collection('tasks').deleteOne(
    { _id: ObjectId(id) },
  );

  return deletedTask;
};

module.exports = {
  create,
  getAll,
  update,
  deleteTask,
};
