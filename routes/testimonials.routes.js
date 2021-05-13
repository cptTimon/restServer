const express = require('express');
const router = express.Router();
const TestimonialController = require('../controllers/testimonials.controllers');


router.get('/testimonials', TestimonialController.getAll);

router.get('/testimonials/:id', TestimonialController.getById);

router.post('/testimonials', TestimonialController.postTestimonial);

router.delete('/testimonials/:id', TestimonialController.deleteTestimonial); 

router.put('/testimonials/:id', TestimonialController.putTestimonial);

module.exports = router;