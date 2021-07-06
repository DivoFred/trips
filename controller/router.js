const express = require("express");
const router = express.Router();
const { bookTrip, getTrips, deleteTrip } = require("./auth");

router.route("/trip/booktrip").post(bookTrip);
router.route("/trip/gettrip").get(getTrips);
router.route("/trip/deletetrip/:id").delete(deleteTrip);
console.log("yowa");

module.exports = router;
