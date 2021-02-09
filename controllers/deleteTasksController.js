const { deleteTasksService } = require("../services");

module.exports = async function deleteTasksController(req, res) {
    deleteTasksService(req.params.id);
    return res.send("Deleted");
};