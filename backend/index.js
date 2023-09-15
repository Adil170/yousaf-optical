// Import required modules
const express = require('express');
const mongoose = require("mongoose");
const productRouter = require('./routes/products');

// Create an Express application
const app = express();
require("dotenv").config();

app.use('/api', productRouter);

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const uri = process.env.DB_URI;
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
