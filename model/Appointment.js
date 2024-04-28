const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  patientName: String,
  appointmentTime: Date,
});

module.exports = mongoose.model("Appointment", appointmentSchema);
