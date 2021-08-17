const Trip = require("../model/trips");

exports.bookTrip = async (req, res, next) => {
  if ("status" in req.body) {
    const { location, destination, status } = req.body;
    await Trip.create({
      location,
      destination,
      status,
    })
      .then((e) => {
        res.status(200).json({ sucess: true, details: e });
      })
      .catch((err) => res.status(500).json({ sucess: false, message: err }));
  } else {
    const { location, destination } = req.body;
    await Trip.create({
      location,
      destination,
    })
      .then((e) => {
        res.status(200).json({ sucess: true, details: e });
      })
      .catch((err) => res.status(500).json({ sucess: false, message: err }));
  }
  next();
};

exports.getTrips = async (req, res, next) => {
  // const { location, destination, status } = req.body;
  await Trip.find()
    .sort({ date: -1 })
    .then((trip) =>
      res.status(200).json({ message: "Below are all your trip", trip })
    )
    .catch((err) => res.status(500).json({ sucess: false, message: err }));
  next();
};
exports.deleteTrip = async (req, res, next) => {
  const { id } = req.params;
  await Trip.findById(id)
    .then((trip) => trip.remove())
    .then(() =>
      res.status(201).json({ sucess: true, message: `deleting ${id}` })
    )
    .catch(() =>
      res.status(500).json({ sucess: false, message: "couldn't proccess" })
    );
  next();
};

exports.deleteAll = async (req, res, next) => {
  await Trip.deleteMany({}).then((trip) => {
    res.status(201).json({ sucess: true, message: trip });
  });
  next();
};
