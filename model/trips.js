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
const trip = mongoose.model("trip", TripSchema);

module.exports = trip;
