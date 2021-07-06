const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
  },
  status: {
    type: String,
    default: "pending",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
const trip = mongoose.model("trip", TripSchema);

module.exports = trip;
