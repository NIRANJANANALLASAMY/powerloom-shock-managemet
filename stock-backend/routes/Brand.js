const express = require("express");
const router = express.Router();
const Brand = require("../models/Brand");

router.get("/", async (req, res) => {
  const brands = await Brand.find();
  res.json(brands);
});

router.post("/", async (req, res) => {
  const brand = new Brand({ name: req.body.name });
  await brand.save();
  res.json(brand);
});

module.exports = router;
