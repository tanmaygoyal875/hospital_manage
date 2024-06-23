const { PatientModel } = require("../models/patientModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { ReportModel } = require("../models/reportModel");


const getAllPatients = async (req, res) => {
    try {
      const patients = await PatientModel.find();
      res.status(200).send({ patients });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong" });
    }
  }

const patientRegister = async (req, res) => {
    // console.log("SERVER : " ,req.body)
    const { email } = req.body;
    try {
      const patient = await PatientModel.findOne({ email });
      if (patient) {
        return res.send({
          message: "Patient already exists",
          id: patient.patientID,
        });
      }
      const newPatient = new PatientModel(req.body);
      await newPatient.save();
      // console.log("Server : ",req.body)
      // console.log("NEW PATIENT :", newPatient)
      const data = await NurseModel.findOne({ email });
      res.send({data , message: "Registered"});
    } catch (error) {
      res.send({ error });
    }
  }

const patientLogin = async (req, res) => {
    const { patientID, password } = req.body;
    try {
      const patient = await PatientModel.findOne({ patientID, password });
  
      if (patient) {
        const token = jwt.sign({ foo: "bar" }, process.env.KEY, {
          expiresIn: "24h",
        });
        let email = patient.email;
        let report = await ReportModel.find({ email });
        res.send({
          message: "Login Successful.",
          user: patient,
          token: token,
          report,
        });
      } else {
        res.send({ message: "Wrong credentials, Please try again." });
      }
    } catch (error) {
      console.log({ message: "Error occurred, unable to Login." });
      console.log(error);
    }
  }

const updatePatient = async (req, res) => {
    const id = req.params.patientId;
    const payload = req.body;
    try {
      const patient = await PatientModel.findByIdAndUpdate({ _id: id }, payload);
      if (!patient) {
        res.status(404).send({ msg: `Patient with id ${id} not found` });
      }
      res.status(200).send(`Patient with id ${id} updated`);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong, unable to Update." });
    }
  }
  
const deletePatient = async (req, res) => {
    const id = req.params.patientId;
    try {
      const patient = await PatientModel.findByIdAndDelete({ _id: id });
      if (!patient) {
        res.status(404).send({ msg: `Patient with id ${id} not found` });
      }
      res.status(200).send(`Patient with id ${id} deleted`);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong, unable to Delete." });
    }
  }

module.exports = {
    getAllPatients,
    patientRegister,
    patientLogin,
    updatePatient,
    deletePatient
};

