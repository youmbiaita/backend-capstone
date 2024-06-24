const User = require('../models/User.js');

//export all functions
module.exports = {
  validateUser,
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};

//middleware to validate users
async function validateUser(req, res, next) {
  const { name, email } = req.body;
  let message = "";
  if (!name) message += 'name, ';
  if (!email) message += 'email.';

  if (message) {
    return res.status(400).send("Missing field(s) required: " + message);
  }
  next();
};

//function to get all users
async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//function to create a new user
async function createUser(req, res) {
  const { name, email, password, isAdmin } = req.body;
  const user = new User({ name, email, password, isAdmin });

  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//function to get an user using id
async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//function to update an user using id
async function updateUserById(req, res) {
  const { name, email, password, isAdmin } = req.body;

  try {
    const user = await User.findByIdAndUpdate(req.params.id, { name, email }, { new: true });
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//function to delete an user using id
async function deleteUserById(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.status(200).json({
      message: 'Successfully Deleted the User',
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};


