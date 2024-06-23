const express = require("express");
const { AdminModel } = require("../models/adminModel");
const { AmbulanceModel } = require("../models/ambulanceModel");
const { AppointmentModel } = require("../models/appointmentModel");
const { BedModel } = require("../models/bedModel");
const { DoctorModel } = require("../models/doctorModel");
const { NurseModel } = require("../models/nurseModel");
const { PatientModel } = require("../models/patientModel");
const { ReportModel } = require("../models/reportModel");

const getAll =async (req, res) => {
    try {
      let admins = await AdminModel.find();
      let patients = await PatientModel.find();
      let ambulances = await AmbulanceModel.find();
      let nurses = await NurseModel.find();
      let beds = await BedModel.find();
      let reports = await ReportModel.find();
      let appointments = await AppointmentModel.find();
      let doctors = await DoctorModel.find();
      let data = {
        admin: admins.length,
        patient: patients.length,
        ambulance: ambulances.length,
        nurse: nurses.length,
        bed: beds.length,
        report: reports.length,
        doctor: doctors.length,
        appointment: appointments.length,
      };
      res.status(200).send({ data });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong" });
    }
  }

module.exports = {
    getAll
}

