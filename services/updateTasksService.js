const { TaskModel } = require("../models");

module.exports = async function updateTasksService(id, data) {
    const task = await TaskModel.findOneAndUpdate({ _id: id }, data);
    return task;
};