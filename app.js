const express = require("express");
const app = express();

const tourRoutes = require("./routes/tourRoutes.js");

// Middleware to parse JSON
app.use(express.json());

// Use the carRouter for all /cars routes
app.use("/tours", tourRoutes);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
