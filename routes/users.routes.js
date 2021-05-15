const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users.controller');

router.get('/users', UserController.getAll);

router.get('/users/:id', UserController.getById);

router.post('/users', UserController.postUser);

router.delete('/users/:id', UserController.deleteUser); 

router.put('/users/:id', UserController.putUser);

module.exports = router;