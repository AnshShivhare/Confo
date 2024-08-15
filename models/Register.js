const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
  conferenceId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  feedback: {
    type: String,
    required: true
  }
});

const RegisterModel = mongoose.model('Register', RegisterSchema);
module.exports = RegisterModel;
