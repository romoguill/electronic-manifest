const User = require('../models/userModel');

async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function getUser(req, res) {
  try {
    const userId = req.params.id;
    const user = await User.find({ _id: userId });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function updateUser(req, res) {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndUpdate({ _id: userId }, req.body, {
      runValidators: true,
      new: true,
    });

    if (!user) {
      throw new Error('User not found');
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function deleteUser(req, res) {
  try {
    const userId = req.params.id;
    await User.findByIdAndRemove({ _id: userId });
    res.status(200).send('User deleted');
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
