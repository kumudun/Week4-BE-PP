// app.js
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const connectDB = require("./db");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// HTTP request logger (Morgan)
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

connectDB();

// Import Routers
const userRouter = require("./routes/userRouter");
const tourRouter = require("./routes/tourRouter");

// Mount routes
app.use("/api/users", userRouter);
app.use("/api/tours", tourRouter);

const port = 4000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
