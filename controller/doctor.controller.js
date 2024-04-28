const Doctor = require("../model/Doctor");
const Appointment = require("../model/Appointment");

const handleGetDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleDoctorsDetails = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleDoctorAvailability = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    res.status(200).json(doctor.availability);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleDoctorAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  handleGetDoctors,
  handleDoctorsDetails,
  handleDoctorAvailability,
  handleDoctorAppointment,
};
