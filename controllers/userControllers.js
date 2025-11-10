const User = require("../models/userModel.js");

// GET /users
const getAllUsers = (req, res) => {
  const users = User.getAll();
  res.status(200).json(users);
};

// GET /users/:userId
const getUserById = (req, res) => {
  const userId = req.params.userId;
  const user = User.findById(userId);
  if (user) {
    return res.status(200).json(user);
  }
  res.status(404).json({ message: "User not found" });
};

// POST /users
const createUser = (req, res) => {
  const newUser = User.addOne({ ...req.body });
  if (newUser) {
    return res.status(201).json(newUser);
  }
  res.status(400).json({ message: "Invalid user data" });
};

// PUT /users/:userId
const updateUser = (req, res) => {
  const userId = req.params.userId;
  const updatedUser = User.updateOneById(userId, { ...req.body });
  if (updatedUser) {
    return res.status(200).json(updatedUser);
  }
  res.status(404).json({ message: "User not found or invalid data" });
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const isDeleted = User.deleteOneById(userId);
  if (isDeleted) {
    return res.status(200).json({ message: "User deleted successfully" });
  }
  res.status(404).json({ message: "User not found" });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
