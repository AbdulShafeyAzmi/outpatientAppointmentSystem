const express = require("express");
const {
  handleGetDoctors,
  handleDoctorsDetails,
  handleDoctorAvailability,
  handleDoctorAppointment,
} = require("../controller/doctor.controller");
const router = express.Router();

router.get("/", handleGetDoctors);
router.get("/:id", handleDoctorsDetails);
router.get("/:id/availability", handleDoctorAvailability);
router.post("/appointments", handleDoctorAppointment);
module.exports = router;
