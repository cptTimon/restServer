const Person = require('../models/person.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Person.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const dep = await Person.findById(req.params.id);
    if(!dep) res.status(404).json({ message: 'Not found...' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.postPerson = async (req, res) => {
  try {
    const { fullName } = req.body;
    const newPerson = new Person({ fullName });
    await newPerson.save();
    res.json({ message: 'Ok' });
  } catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.deletePerson = async (req, res) => {
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
};

exports.putPerson = async (req, res) => {
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
};