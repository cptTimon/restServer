const express = require('express');
const router = express.Router();
const Testimonial = require('../models/testimonial.model');

router.get('/testimonials', async (req, res) => {
  try {
    res.json(await Testimonial.find().populate('author'));
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.get('/testimonials/:id', async (req, res) => {
  try {
    const dep = await Testimonial.findById(req.params.id).populate('author');
    if(!dep) res.status(404).json({ message: 'Not found...' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.post('/testimonials', async (req, res) => {
  try {
    const { author, text } = req.body;
    const newTestimonial = new Testimonial({ author, text });
    await newTestimonial.save();
    res.json({ message: 'Ok' });
  } catch(err) {
    res.status(500).json({ message: err });
  }
});

router.delete('/testimonials/:id', async (req, res) => {
  try {
    const dep = await Testimonial.findById(req.params.id);
    if(dep) {
      await Testimonial.deleteOne({ _id: req.params.id });
      res.json(dep);
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.put('/testimonials/:id', async (req, res) => {
  try {
    const { author, text } = req.body;
    const dep = await Testimonial.findById(req.params.id);
    if(dep) {
      dep.author = author;
      dep.text = text;
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;