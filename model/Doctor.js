const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: "string",
  speciality: "string",
  availability: [
    {
      day: String,
      startTime: String,
      endTime: String,
      maxPatients: Number,
    },
  ],
});

module.exports = mongoose.model("Doctor", doctorSchema);
