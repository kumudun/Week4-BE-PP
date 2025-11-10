const Tour = require("../models/tourModel.js");

// GET /tours
const getAllTours = (req, res) => {
  const tours = Tour.getAll();
  res.status(200).json(tours);
};

// GET /tours/:tourId
const getTourById = (req, res) => {
  const tourId = req.params.tourId;
  const tour = Tour.findById(tourId);
  if (tour) {
    return res.status(200).json(tour);
  }
  res.status(404).json({ message: "Tour not found" });
};

// POST /tours
const createTour = (req, res) => {
  const newTour = Tour.addOne({ ...req.body });
  if (newTour) {
    return res.status(201).json(newTour); // created
  }
  res.status(400).json({ message: "Invalid tour data" });
};

// PUT /tours/:tourId
const updateTour = (req, res) => {
  const tourId = req.params.tourId;
  const updatedTour = Tour.updateOneById(tourId, { ...req.body });
  if (updatedTour) {
    return res.status(200).json(updatedTour);
  }
  res.status(404).json({ message: "Tour not found or invalid data" });
};

// DELETE /tours/:tourId
const deleteTour = (req, res) => {
  const tourId = req.params.tourId;
  const isDeleted = Tour.deleteOneById(tourId);
  if (isDeleted) {
    // 200 OK with a message (or 204 with no body is also fine)
    return res.status(200).json({ message: "Tour deleted successfully" });
  }
  res.status(404).json({ message: "Tour not found" });
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
