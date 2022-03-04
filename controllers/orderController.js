const Order = require('../models/orderModel');

async function getAllOrders(req, res) {
  try {
    const orders = await Order.find();
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function getOrder(req, res) {
  try {
    const orderId = req.params.id;
    const order = await Order.find({ _id: orderId });
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function createOrder(req, res) {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({ order });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function updateOrder(req, res) {
  try {
    const orderId = req.params.id;
    const order = await Order.findByIdAndUpdate({ _id: orderId }, req.body, {
      runValidators: true,
      new: true,
    });

    if (!order) {
      throw new Error('Order not found');
    }
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function deleteOrder(req, res) {
  try {
    const orderId = req.params.id;
    await Order.findByIdAndRemove({ _id: orderId });
    res.status(200).send('Order deleted');
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
