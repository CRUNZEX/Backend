const { createTasksService } = require("../services");

module.exports = async function createTasksController(req, res) {
    await createTasksService(req.body);
    return res.send(200);
}