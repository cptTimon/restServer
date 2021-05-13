const express = require('express');
const router = express.Router();
const PersonController = require('../controllers/persons.controller');

router.get('/persons', PersonController.getAll);

router.get('/persons/:id', PersonController.getById);

router.post('/persons', PersonController.postPerson);

router.delete('/persons/:id', PersonController.deletePerson); 

router.put('/persons/:id', PersonController.putPerson);

module.exports = router;