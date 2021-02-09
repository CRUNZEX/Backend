const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.get('/tasks', (req, res) => controllers.getTasksController(req, res));   // short term return function

router.post("/task", (req, res) => controllers.createTasksController(req, res));

router.put("/task", (req, res) => controllers.updateTasksController(req, res));

router.delete("/task/:id", (req, res) => controllers.deleteTasksController(req, res));

// router.get('/', (req, res) => {
//     res.send('Hello World123456');
// });

// router.get('/students', (req, res) => {
//     res.json(students);
// });

// // ex. path: localhost:1000/students/1
// router.get('/students/:id', (req, res) => {
//     res.json(students.find((students) => students.id === req.params.id));
// });

// // post in postman create
// router.post('/students', (req, res) => {
//     students.push(req.body);
//     res.status(201);    // create
//     res.json(req.body);
// });

// // update
// router.put('/students/:id', (req, res) => {
//     const updateIndex = students.findIndex((students) => students.id === req.params.id);
//     res.json(Object.assigns(students[updateIndex], req.body));
// });

// // delete
// router.delete("/students/:id", (req, res) => {
//     const delIndex = students.findIndex((students) => students.id === req.params.id);
//     students.splice(delIndex, 1);
//     res.status(204).send();
// });

module.exports = router;