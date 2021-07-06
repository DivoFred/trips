const Trip = require("../model/trips");

exports.bookTrip = async (req, res, next) => {
  const { location, destination, status } = req.body;
  await Trip.create({
    location,
    destination,
    status,
  })
    .then(() => {
      res.json({ sucess: true, location, destination, status });
      console.log("sent");
    })
    .catch((err) => console.log(err));
  next();
};
exports.getTrips = async (req, res, next) => {
  const { location, destination, status } = req.body;
  await Trip.find()
    .sort({ date: -1 })
    .then((trip) => res.json({ message: "Below are all your trip", trip }))
    .catch((err) => console.log(err));
  next();
};
exports.deleteTrip = async (req, res, next) => {
  const { id } = req.params;
  await Trip.findById(id)
    .then((trip) => trip.remove())
    .then(() => res.json({ sucess: true, message: `deleting ${id}` }))
    .catch(() => res.json({ sucess: false, message: "couldn't proccess" }));
  next();
};

// module.exports = deleteTrips;
