const express = require('express');
const router = express.Router();
const Product = require('../model/productScems'); // Import the Product model

// Create a POST route for adding sunglasses
router.post('/products', async (req, res) => {
    try {
      // Create a new product using the generic Product schema
      const newProduct = new Product(req.body);
      // Save the product to the database
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct); // Respond with the newly created product
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to add the product' });
    }
  });

// Create a POST route for adding shades
router.post('/shades', (req, res) => {
  req.body.category = 'Shades'; // Set the category to 'Shades' for this route
  createProduct(req, res);
});

// Create a POST route for adding contact lenses
router.post('/contactlenses', (req, res) => {
  req.body.category = 'ContactLenses'; // Set the category to 'ContactLenses' for this route
  createProduct(req, res);
});

// Helper function to create a product
function createProduct(req, res) {
  const newProduct = new Product(req.body);

  // Save the product to the database
  newProduct.save((err, product) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Unable to add the product' });
    }

    res.status(201).json(product); // Respond with the newly created product
  });
}

module.exports = router;
