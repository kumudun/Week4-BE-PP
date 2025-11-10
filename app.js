const userRouter = require("./routes/userRouter");
const morgan = require("morgan");

const express = require("express");
const app = express();

const tourRoutes = require("./routes/tourRoutes.js");

// Middleware to parse JSON
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/users", userRouter);

// Use the tourRouter for all /tours routes
app.use("/tours", tourRoutes);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
