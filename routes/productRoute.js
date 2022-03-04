const express = require('express');
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

const router = express.Router();

router.route('/api/v1/products').get(getAllProducts).post(createProduct);

router
  .route('/api/v1/products/:id')
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = router;
