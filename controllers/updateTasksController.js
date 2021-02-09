const { updateTasksService } = require("../services");

module.exports = async function updateTasksController(req, res) {
    await updateTasksService(req.query.id, req.body);
    return res.send(200);
};