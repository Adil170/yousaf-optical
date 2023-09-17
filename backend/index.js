// Import required modules
const express = require('express');
const mongoose = require("mongoose");
const productRouter = require('./routes/productRoutes');
const  Product  = require("./model/productScems");


// Create an Express application
const app = express();
app.use(express.json()); 
require("dotenv").config();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // If you have static assets

// app.use('/admin', require('./controllers/adminController'));

app.use('/api', productRouter);


// Define a route
app.get('/', async(req, res) => {
 
  try{
    const products = await Product.find()
    res.render('admin', { products });
 
   }
   catch(error){
 console.error(error)
   }
 
 })


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
