const orderModel = require('../models/orderModel');

async function getAllOrders(req, res) {
  try {
    const orders = await orderModel.find();
    res.status(200).json({ orders });
  } catch (error) {
    res.json({ msg: 'Error finding orders' });
  }
}

async function getOrder(req, res) {
  res.send('Single Order');
}

async function createOrder(req, res) {
  try {
    const order = req.body;
    console.log(order);
    await orderModel.create(order);
    res.send('created');
  } catch (error) {
    console.log(error);
  }
}

async function updateOrder(req, res) {
  res.send('Updated Order');
}

async function deleteOrder(req, res) {
  res.send('Delete Order');
}

module.exports = {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
