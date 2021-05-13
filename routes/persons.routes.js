const express = require('express');
const router = express.Router();
const Person = require('../models/person.model');

router.get('/persons', async (req, res) => {
  try {
    res.json(await Person.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.get('/persons/:id', async (req, res) => {
  try {
    const dep = await Person.findById(req.params.id);
    if(!dep) res.status(404).json({ message: 'Not found...' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.post('/persons', async (req, res) => {
  try {
    const { fullName } = req.body;
    const newPerson = new Person({ fullName });
    await newPerson.save();
    res.json({ message: 'Ok' });
  } catch(err) {
    res.status(500).json({ message: err });
  }
});

router.delete('/persons/:id', async (req, res) => {
  try {
    const dep = await Person.findById(req.params.id);
    if(dep) {
      await Person.deleteOne({ _id: req.params.id });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.put('/persons/:id', async (req, res) => {
  try {
    const { fullName } = req.body;
    const dep = await Person.findById(req.params.id);
    if(dep) {
      dep.fullName = fullName;
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;