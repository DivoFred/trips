const express = require("express");
const router = express.Router();
const { bookTrip, getTrips, deleteTrip, deleteAll } = require("./auth");

router.route("/trip/booktrip").post(bookTrip);
router.route("/trip/gettrip").get(getTrips);
router.route("/trip/deletetrip/:id").delete(deleteTrip);
router.route("/trip/deleteall").delete(deleteAll);
console.log("yowa");

module.exports = router;
