const express = require("express");
const router = require("./controller/router");
const app = express();
const PORT = 5000;
const connectDB = require("./db/config");
app.use(express.json());

app.use("/", router);
connectDB();
app.listen(PORT, console.log(`server starting at PORT ${PORT}`));
