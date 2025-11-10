const Tour = require("../models/tourModel.js");

// Get /Tours
const getAllTours = (req, res) => {
  const tours = Tour.getAll();
  res.status(200).json(tours);
};

// Get /Tours/:tourId
const getTourById = (req, res) => {
  const tourId = req.params.tourId;
  const tour = Tour.findById(tourId);
  if (tour) {
    res.status(200).json(tour);
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};
// Post /Tours
const createTour = (req, res) => {
  const newTour = Tour.addOne({ ...req.body });
  if (newTour) {
    res.status(201).json(newTour);
  } else {
    res.status(400).json({ message: "Invalid tour data" });
  }
};

// Put /Tours/:tourId
const updateTour = (req, res) => {
  const tourId = req.params.tourId;
  const updatedTour = Tour.updateOneById(tourId, { ...req.body });
  if (updatedTour) {
    res.status(200).json(updatedTour);
  } else {
    res.status(404).json({ message: "Tour not found or invalid data" });
  }
};

// Delete /Tours/:tourId
const deleteTour = (req, res) => {
  const tourId = req.params.tourId;
  const isDeleted = Tour.deleteOneById(tourId);
  if (isDeleted) {
    res.status(200).json({ message: "Tour deleted successfully" });
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
