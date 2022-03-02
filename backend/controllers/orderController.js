function getAllOrders(req, res) {
  res.send('All Orders');
}

function getOrder(req, res) {
  res.send('Single Order');
}

function createOrder(req, res) {
  res.send('Created Order');
}

function updateOrder(req, res) {
  res.send('Updated Order');
}

function deleteOrder(req, res) {
  res.send('Delete Order');
}

module.exports = {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
