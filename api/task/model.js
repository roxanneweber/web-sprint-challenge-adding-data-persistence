const db = require('../../data/dbConfig');

const convertToBoolean = require('../shared-model/shared-model');

async function findTasks() {
    const results = await db('tasks as t')
        .select('t.*', 'p.project_name', 'p.project_description')
        .leftJoin('projects as p', 't.project_id', 'p.project_id');

    results.forEach((result) => convertToBoolean(result, 'task_completed'));

    return results;
}

async function createTask(task) {
    const [task_id] = await db('tasks').insert(task);
    const result = await db('tasks').where({ task_id }).first();

    convertToBoolean(result, 'task_completed');

    return result;
}

module.exports = {
    findTasks,
    createTask,
}