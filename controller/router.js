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
  updateRole,
} = require("./auth");

router.route("/trip/booktrip").post(bookTrip);
router.route("/trip/postUser").post(postUser);
router.route("/trip/loginUser").post(loginUser);

// router.route("/").get(getTrips);
router.route("/trip/getUser").get(getUser);
router.route("/trip/gettrip").post(getTrips);

router.route("/trip/deletetrip/:id").delete(deleteTrip);
router.route("/trip/deleteall").delete(deleteAll);
router.route("/trip/deletealluser").delete(deleteAllUser);

router.route("/trip/updatestatus").put(updateStatus);
router.route("/trip/updateRole").put(updateRole);

module.exports = router;
