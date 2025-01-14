const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const bookingsRoute = require("./routes/bookings");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

app.use("/api/bookings", bookingsRoute);

app.listen(config.port, () => console.log(`Server running on port ${config.port}`));