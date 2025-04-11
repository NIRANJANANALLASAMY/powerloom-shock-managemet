const express = require('express');
const router = express.Router();
const Brand = require('../models/Brand');
//const Product = require('../models/stockList');

// Get all brands
router.get('/', async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new brand
router.post('/', async (req, res) => {
  try {
    const brand = new Brand({ name: req.body.name });
    const saved = await brand.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get products by brand
router.get('/:brandName/products', async (req, res) => {
  try {
    const brandName = req.params.brandName;
    const products = await Product.find({ brand: brandName });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a product to a brand
router.post('/:brandName/products', async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      rate: req.body.rate,
      brand: req.params.brandName,
    });
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
