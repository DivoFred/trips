const { Trip, User } = require("../model/trips");

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

exports.updateStatus = async (req, res, next) => {
  const { id } = req.params;
  const { newStatus } = req.body;
  await Trip.findById(id)
    .then((e) => {
      e.status = newStatus;
      e.save((err) => {
        if (err) {
          res.status("400").json({ success: true, message: err });
          process.exit(1);
        }
        res.status("201").json({ success: true, message: e });
      });
    })
    .catch((err) => res.status("400").json({ success: false, message: err }));
};
exports.postUser = async (req, res, next) => {
  const { user, password } = req.body;
  let userCheck = await User.findOne({ user });
  if (userCheck) {
    res.status("400").json({ success: false, message: "User Already exist" });
  } else {
    // const hashPass = await bcryptjs.hash(password, 12);
    await User.create({
      user,
      password,
    })
      .then((e) => {
        res.status(201).json({ success: true, user: e });
      })
      .catch((e) => {
        res.status(401).json({ success: false, err: e });
      });
  }
};

exports.getUser = async (req, res, next) => {
  await User.find({})
    .then((e) => {
      res.status(200).json({ success: true, user: e });
    })
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
exports.deleteAllUser = async (req, res, next) => {
  await User.deleteMany()
    .then(() =>
      res.status(201).json({ success: true, deleting: "All Items Gone" })
    )
    .catch((e) => res.status(401).json({ success: false, err: e.message }));
  next();
};

exports.loginUser = async (req, res, next) => {
  const { user, password } = req.body;
  if (!user || !password) {
    res
      .status("400")
      .json({ success: false, message: "user or passsword not present" });
  } else {
    const userCheck = await User.findOne({ user });
    if (!userCheck) {
      res.status("400").json({ success: false, message: "User not found" });
    } else {
      // Check for the comparison btw the password provided and the password transformed by bcrypt
      // const isMatch = await bcryptjs.compare(password, userCheck.password);
      if (password === userCheck.password) {
        // req.session.isAuth = true;
        res.status("200").json({ success: true, user: userCheck });
      } else {
        res
          .status("400")
          .json({ success: false, message: "Password Doesn't Match" });
      }
      next();
    }
  }
};
