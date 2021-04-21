const express = require('express');
const router = express.Router();
const db = require('../db');

router.route('/testimonials').get((req,res) => {
  res.json(db.testimonials);
});

router.route('/testimonials/random').get((req,res) => {
  const item = db.testimonials[Math.floor(Math.random() * db.testimonials.length)];
  res.json(item);
});

router.route('/testimonials/:id').get((req,res) => {
  const item = db.testimonials.find(item => item.id == req.params.id);
  if (item) res.json(item);
  else res.status(404).json({ message: 'Not found...' });
})

router.route('/testimonials').post((req,res) => {
  const testimonial = {
    id: uuidv4(),
    author: req.body.author,
    text: req.body.text
  }
  db.testimonials.push(testimonial);
  return res.json(testimonial);
});

router.route('/testimonials/:id').put((req,res) => {
  db.testimonials.forEach(testimonial => {
    if(testimonial.id && testimonial.id == req.params.id) {
      testimonial.author = req.body.author;
      testimonial.text = req.body.text;
      return res.json(db.testimonials);
    }
    else res.status(404).json({ message: 'Not found...' });
  });
});

router.route('/testimonials/:id', (req,res) => {
  db.testimonials.forEach(testimonial => {
    if(testimonial.id && testimonial.id == req.params.id) {
      const index = db.testimonials.indexOf(element);
      db.testimonials.splice(index,1);
      return res.json(db.testimonials);
    }
    else res.status(404).json({ message: 'Not found...' });
  })
});

module.exports = router;