const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.js");

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers.js");

// PUBLIC ROUTES
router.get("/", getAllUsers);
router.get("/:userId", getUserById);

// PROTECTED ROUTES (require admin=true)
router.use(auth);

router.post("/", createUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

module.exports = router;
