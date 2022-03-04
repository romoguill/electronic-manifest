const express = require('express');
const {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderController');

const router = express.Router();

router.route('/api/v1/orders').get(getAllOrders).post(createOrder);

router
  .route('/api/v1/orders/:id')
  .get(getOrder)
  .patch(updateOrder)
  .delete(deleteOrder);

module.exports = router;
