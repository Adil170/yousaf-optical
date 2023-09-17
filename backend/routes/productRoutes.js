const  Product  = require("../model/productScems");
const router = require("express").Router();

//CREATE

router.post("/products",  async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = new Product(productData);
    await newProduct.save();
    res.redirect('/');
    // res.status(200).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    if (error.errors) {
      const validationErrors = {};
      for (const field in error.errors) {
        validationErrors[field] = error.errors[field].message;
      }
      res.status(422).json({ errors: validationErrors });
    } else {
      console.error(error);
      res.status(500).send(error);
    }
  }
  
});

// get all Products 

router.delete('/products/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;

    // Check if the product with the given ID exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Delete the product
    await Product.findByIdAndRemove(productId);

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;
