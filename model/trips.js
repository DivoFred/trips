const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "Basic",
  },
  trips: [TripSchema],
});
const User = mongoose.model("user", UserSchema);
const Trip = mongoose.model("trip", TripSchema);

module.exports = { Trip, User };
