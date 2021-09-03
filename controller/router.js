const express = require("express");
const router = express.Router();
const {
  bookTrip,
  getTrips,
  deleteTrip,
  deleteAll,
  updateStatus,
} = require("./auth");

router.route("/trip/booktrip").post(bookTrip);
router.route("/").get(getTrips);
router.route("/trip/gettrip").get(getTrips);
router.route("/trip/deletetrip/:id").delete(deleteTrip);
router.route("/trip/deleteall").delete(deleteAll);
router.route("/trip/updatestatus/:id").put(updateStatus);

module.exports = router;
