const User = require("../models/userModel.js");

// Get /Tours
const getAllUsers = (req, res) => {
  const users = User.getAll();
  res.status(200).json(users);
};

// Get /Tours/:tourId
const getUserById = (req, res) => {
  const userId = req.params.userId;
  const user = User.findById(userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
// Post /Tours
const createUser = (req, res) => {
  const newUser = User.addOne({ ...req.body });
  if (newUser) {
    res.status(201).json(newUser);// 201 created
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

// Put /Tours/:tourId
const updateUser = (req, res) => {
  const userId = req.params.userId;
  const updatedUser = User.updateOneById(userId, { ...req.body });
  if (updatedUser) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found or invalid data" });
  }
};

// Delete /Tours/:tourId
const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const isDeleted = User.deleteOneById(userId);
  if (isDeleted) {
    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(204).json({ message: "No content found" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
