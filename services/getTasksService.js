const { TaskModel } = require("../models");     // deconstruct

module.exports = async function getTasksService( isFinished ) {
    const tasks = await TaskModel.find({ isFinished: isFinished });
    return tasks;
}