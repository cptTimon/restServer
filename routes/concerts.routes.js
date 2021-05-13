const express = require('express');
const router = express.Router();
const Concert = require('../models/concert.model');

router.get('/concerts', async (req, res) => {
  try {
    res.json(await Concert.find().populate('performer'));
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.get('/concerts/:id', async (req, res) => {
  try {
    const dep = await Concert.findById(req.params.id).populate('performer');
    if(!dep) res.status(404).json({ message: 'Not found...' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.post('/concerts', async (req, res) => {
  try {
    const { performer, genre, price, day, image } = req.body;
    const newConcert = new Concert({ performer, genre, price, day, image });
    await newConcert.save();
    res.json({ message: 'Ok' });
  } catch(err) {
    res.status(500).json({ message: err });
  }
});

router.delete('/concerts/:id', async (req, res) => {
  try {
    const dep = await Concert.findById(req.params.id);
    if(dep) {
      await Concert.deleteOne({ _id: req.params.id });
      res.json(dep);
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.put('/concerts/:id', async (req, res) => {
  try {
    const { performer, genre, price, day, image } = req.body;
    const dep = await Concert.findById(req.params.id);
    if(dep) {
      dep.performer = performer;
      dep.genre = genre;
      dep.price = price;
      dep.day = day;
      dep.image = image;
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
