const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  token: {
    type: String,
    default: null,
  },
});

const User = mongoose.model('User', userSchema, 'user');

module.exports = { User };
