const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.get('/tasks', (req, res) => controllers.getTasksController(req, res));   // short term return function

router.post("/task", (req, res) => controllers.createTasksController(req, res));

router.put("/task", (req, res) => controllers.updateTasksController(req, res));

router.delete("/task/:id", (req, res) => controllers.deleteTasksController(req, res));

module.exports = router;