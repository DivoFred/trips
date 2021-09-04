const express = require("express");
const router = express.Router();
const {
  bookTrip,
  getTrips,
  deleteTrip,
  deleteAll,
  updateStatus,
  postUser,
  getUser,
  deleteAllUser,
  loginUser,
} = require("./auth");

router.route("/trip/booktrip").post(bookTrip);
router.route("/trip/postUser").post(postUser);
router.route("/trip/loginUser").post(loginUser);

// router.route("/").get(getTrips);
router.route("/trip/getUser").get(getUser);
router.route("/trip/gettrip").get(getTrips);

router.route("/trip/deletetrip/:id").delete(deleteTrip);
router.route("/trip/deleteall").delete(deleteAll);
router.route("/trip/deletealluser").delete(deleteAllUser);

router.route("/trip/updatestatus/:id").put(updateStatus);

module.exports = router;
