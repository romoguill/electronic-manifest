const Product = require('../models/productModel');

async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function getProduct(req, res) {
  try {
    const productId = req.params.id;
    const product = await Product.find({ _id: productId });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function createProduct(req, res) {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function updateProduct(req, res) {
  try {
    const productId = req.params.id;
    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );

    if (!product) {
      throw new Error('Product not found');
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function deleteProduct(req, res) {
  try {
    const productId = req.params.id;
    await Product.findByIdAndRemove({ _id: productId });
    res.status(200).send('Product deleted');
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
