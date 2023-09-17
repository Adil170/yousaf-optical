const mongoose = require('mongoose');
const { Category } = require('./model/productScems'); // Import your models

// Define your MongoDB Atlas connection string here
const mongoURI = 'mongodb+srv://arshu123:arshu123@bezora.tm4nydu.mongodb.net/yousafOptical';

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Create categories and save products in their respective categories
const categoriesData = [
  {
    categoryName: 'sunGlasses',
    products: [], // Add products of sunGlasses category here
  },
  {
    categoryName: 'Sightglasses',
    products: [], // Add products of Sightglasses category here
  },
  {
    categoryName: 'googlas',
    products: [], // Add products of googlas category here
  },
  {
    categoryName: 'stylish',
    products: [], // Add products of googlas category here
  },
  {
    categoryName: 'Sports Glasses',
    products: [], // Add products of googlas category here
  },
  {
    categoryName: 'Safety Goggles',
    products: [], // Add products of googlas category here
  },
  {
    categoryName: 'watches',
    products: [], // Add products of googlas category here
  },
  
  {
    categoryName: 'Swimming Goggles',
    products: [], // Add products of googlas category here
  },
  {
    categoryName: 'contect lens',
    products: [], // Add products of googlas category here
  },
  
  
  
];

// Use async/await to insert the categories data
(async () => {
  try {
    const insertedCategories = await Category.insertMany(categoriesData);
    console.log('Categories saved successfully:', insertedCategories);
  } catch (error) {
    console.error('Error saving categories:', error);
  } finally {
    // Close the database connection after the operation
    mongoose.connection.close();
  }
})();