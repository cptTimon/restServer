const User = require('../models/user.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await User.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const dep = await User.findById(req.params.id);
    if(!dep) res.status(404).json({ message: 'Not found...' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.postUser = async (req, res) => {
  try {
    const { fullName } = req.body;
    const newUser = new User({ fullName });
    await newUser.save();
    res.json({ message: 'Ok' });
  } catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const dep = await User.findById(req.params.id);
    if(dep) {
      await User.deleteOne({ _id: req.params.id });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.putUser = async (req, res) => {
  try {
    const { fullName } = req.body;
    const dep = await User.findById(req.params.id);
    if(dep) {
      dep.fullName = fullName;
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};