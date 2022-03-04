const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    enum: ['trucker', 'customer', 'admin'],
  },
});

module.exports = mongoose.model('User', UserSchema);
