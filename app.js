// app.js
const express = require("express");
const morgan = require("morgan");

const app = express();

// Import Routers
const userRouter = require("./routes/userRouter");
const tourRouter = require("./routes/tourRouter");

// Middleware to parse JSON
app.use(express.json());

// HTTP request logger (Morgan)
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

// Mount routes
app.use("/api/users", userRouter);
app.use("/api/tours", tourRouter);

const port = 4000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
