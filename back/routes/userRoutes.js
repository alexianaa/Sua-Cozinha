const routes = require("express").Router();
const UserController = require('../controllers/UserController');

routes.post('/create', UserController.createUser);
routes.put('/edit/:id', UserController.editUser);
routes.delete('/delete/:id', UserController.deleteUser);
routes.get('/', UserController.getAllUsers);

module.exports = routes;