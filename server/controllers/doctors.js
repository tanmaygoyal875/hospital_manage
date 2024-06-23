const { DoctorModel } = require("../models/doctorModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const getDoctors = async (req, res) => {
    try {
      const doctors = await DoctorModel.find();
      res.status(200).send(doctors);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong" });
    }
  }

const doctorRegister = async (req, res) => {
    const { email } = req.body;
    try {
      const doctor = await DoctorModel.findOne({ email });
      if (doctor) {
        return res.send({
          message: "Doctor already exists",
        });
      }
      let value = new DoctorModel(req.body);
      await value.save();
      const data = await DoctorModel.findOne({ email });
      return res.send({ data, message: "Registered" });
    } catch (error) {
      res.send({ message: "error in doctor register" });
    }
  }

const doctorLogin = async (req, res) => {
    const { docID, password } = req.body;
    try {
      const doctor = await DoctorModel.findOne({ docID, password });
  
      if (doctor) {
        const token = jwt.sign({ foo: "bar" }, process.env.KEY, {
          expiresIn: "24h",
        });
        res.send({ message: "Successful", user: doctor, token: token });
      } else {
        res.send({ message: "Wrong credentials" });
      }
    } catch (error) {
      console.log({ message: "Error in doctor login" });
      console.log(error);
    }
  }

const updateDoctor = async (req, res) => {
    const id = req.params.doctorId;
    const payload = req.body;
    try {
      await DoctorModel.findByIdAndUpdate({ _id: id }, payload);
      const doctor = await DoctorModel.findById(id);
      if (!doctor) {
        return res
          .status(404)
          .send({ message: `Doctor with id ${id} not found` });
      }
      res.status(200).send({ message: `Doctor Updated`, user: doctor });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong, unable to Update." });
    }
  }

const deleteDoctor = async (req, res) => {
    const id = req.params.doctorId;
    try {
      const doctor = await DoctorModel.findByIdAndDelete({ _id: id });
      if (!doctor) {
        res.status(404).send({ msg: `Doctor with id ${id} not found` });
      }
      res.status(200).send(`Doctor with id ${id} deleted`);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong, unable to Delete." });
    }
  }

module.exports = {
    getDoctors,
    doctorRegister,
    doctorLogin,
    updateDoctor,
    deleteDoctor
}