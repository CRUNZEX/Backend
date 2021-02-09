const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    taskName: String,   // null
    time: String,   // null
    inFinished: { type: Boolean, default: false },  // false
});

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;