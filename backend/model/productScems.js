const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  size: String,
  price: {
    type: Number,
    required: true,
  },
  colors: [
    {
      colorName: String,
      colorCode: String,
      imagePath: String,
    },
  ],
});

const sunglassesSchema = new mongoose.Schema({
  // Additional fields specific to sunglasses, if any
});

const shadesSchema = new mongoose.Schema({
  // Additional fields specific to shades, if any
});

const contactLensesSchema = new mongoose.Schema({
  // Additional fields specific to contact lenses, if any
});

// Create models for each category
const Product = mongoose.model('Product', productSchema);
const Sunglasses = Product.discriminator('Sunglasses', sunglassesSchema);
const Shades = Product.discriminator('Shades', shadesSchema);
const ContactLenses = Product.discriminator('ContactLenses', contactLensesSchema);

module.exports = {
  Product,
  Sunglasses,
  Shades,
  ContactLenses,
};
