const express = require('express');
const router = express.Router();
const Product = require('../models/editstock');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('GET Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// POST a new product
router.post('/', async (req, res) => {
  const { name, price, qty, amount } = req.body;

  try {
    const newProduct = new Product({ name, price, qty, amount });
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    console.error('POST Error:', err);
    res.status(400).json({ error: err.message });
  }
});

// PUT to update product
router.put('/:id', async (req, res) => {
  console.log('Update request received for:', req.params.id);
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    console.error('UPDATE Error:', err);
    res.status(400).json({ error: err.message });
  }
});

// DELETE a product
router.delete('/:id', async (req, res) => {
  console.log('Delete request received for:', req.params.id);
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('DELETE Error:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
