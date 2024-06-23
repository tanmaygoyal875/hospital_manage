const { AppointmentModel } = require("../models/appointmentModel");

const getAllAppointments = async (req, res) => {
    let query = req.query;
    try {
      const appointments = await AppointmentModel.find(query);
      res.status(200).send(appointments);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong" });
    }
  }

const createAppointment = async (req, res) => {
    const payload = req.body;
    try {
      const appointment = new AppointmentModel(payload);
      await appointment.save();
    } catch (error) {
      res.send(error);
    }
    res.send("Appointment successfully booked.");
  }

const updateAppointment = async (req, res) => {
    const id = req.params.appointmentId;
    const payload = req.body;
    try {
      const appointment = await AppointmentModel.findByIdAndUpdate(
        { _id: id },
        payload
      );
      if (!appointment) {
        res.status(404).send({ msg: `Appointment with id ${id} not found` });
      }
      res.status(200).send(`Appointment with id ${id} updated`);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong, unable to Update." });
    }
  }

const deleteAppointment = async (req, res) => {
    const id = req.params.appointmentId;
    try {
      const appointment = await AppointmentModel.findByIdAndDelete({ _id: id });
      if (!appointment) {
        res.status(404).send({ msg: `Appointment with id ${id} not found` });
      }
      res.status(200).send(`Appointment with id ${id} deleted`);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong, unable to Delete." });
    }
  }


module.exports = {
    getAllAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment
};
