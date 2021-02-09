const { TaskModel } = require("../models");

module.exports = async function createTasksService(data) {
    const task = new TaskModel(data);
    return task.save();
}