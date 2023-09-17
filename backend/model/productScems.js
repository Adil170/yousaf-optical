const mongoose = require('mongoose');

// Define a schema for colors
const colorSchema = new mongoose.Schema({
  colorName: {
    type: String,
    required: true
  },
  colorCode: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },
});

// Define a schema for products
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  price: {
    type: Number, // Change to Number
    required: true
  },
  category: {
    type: String,
    required: true
  },
  rating: {
    type: Number, // Change to Number
    default: 4.9 // Set the default value here
  },
  colors: [colorSchema],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
