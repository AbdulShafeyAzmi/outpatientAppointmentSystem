const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const doctorRoute = require("./routes/doctor.route");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Mongodb connected..."))
  .catch((err) => console.log(err));

app.use("/api/doctors", doctorRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
