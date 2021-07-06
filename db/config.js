const mongoose = require("mongoose");
const localDB = `mongodb://localhost:27017/trips`;

const connectDB = async () => {
  await mongoose
    .connect(localDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .catch((err) => console.log(err));
  console.log("MongoDB QUANECTTED");
};

module.exports = connectDB;
