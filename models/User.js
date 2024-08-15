const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    time: String, // Field to represent the user's availability time as a Date object
    day: String
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;

