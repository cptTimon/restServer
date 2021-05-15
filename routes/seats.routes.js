const express = require('express');
const router = express.Router();
const SeatController = require('../controllers/seats.controller');

router.get('/seats', SeatController.getAll)

router.get('/seats/:id', SeatController.getById);

router.post('/seats', SeatController.postSeat);

router.delete('/seats/:id', SeatController.deleteSeat);

router.put('/seats/:id', SeatController.putSeat);

module.exports = router;