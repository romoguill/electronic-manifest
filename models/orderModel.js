const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
  },
  items: [
    {
      sku: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    enum: ['unassigned', 'assigned', 'completed', 'cancelled'],
    default: 'unassigned',
  },
});

module.exports = mongoose.model('Order', OrderSchema);
