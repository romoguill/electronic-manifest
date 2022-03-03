const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 3,
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  description: {
    type: String,
    maxlength: 200,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
