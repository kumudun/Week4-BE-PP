// routes/tourRouter.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.js");

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourController.js");

// PUBLIC ROUTES

router.get("/", getAllTours);
router.get("/:tourId", getTourById);


router.use(auth);

router.post("/", createTour);


router.put("/:tourId", updateTour);

router.delete("/:tourId", deleteTour);

module.exports = router;
