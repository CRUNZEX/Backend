const { TaskModel } = require("../models");

module.exports = async function deleteTasksController(id) {
    return TaskModel.deleteOne({ _id: id });
};