const { TaskModel } = require("../models");

module.exports = async function updateTasksService(id, data) {
    console.log("log>> ", id, JSON.stringify(data, null, 2));
    const task = await TaskModel.findOneAndUpdate({ _id: id }, data);
    return task;
};