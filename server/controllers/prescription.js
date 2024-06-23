const express = require("express");
const { PrescriptionModel } = require("../models/prescriptionModel");

const getAllPrescriptions = async (req, res) => {
    let query = req.query;
    try {
      const prescriptions = await PrescriptionModel.find(query);
      res.status(200).send(prescriptions);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong" });
    }
  }

const createPrescription = async (req, res) => {
    const payload = req.body;
    try {
      const prescription = new PrescriptionModel(payload);
      await prescription.save();
    } catch (error) {
      res.send("Error occurred, unable to create a prescription.");
      console.log(error);
    }
    res.send("Prescription successfully created.");
  }

const updatePrescription = async (req, res) => {
    const id = req.params.prescriptionId;
    const payload = req.body;
    try {
      const prescription = await PrescriptionModel.findByIdAndUpdate(
        { _id: id },
        payload
      );
      if (!prescription) {
        res.status(404).send({ msg: `Prescription with id ${id} not found` });
      }
      res.status(200).send(`Prescription with id ${id} updated`);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong, unable to Update." });
    }
  }

const deletePrescription = async (req, res) => {
    const id = req.params.prescriptionId;
    try {
      const prescription = await PrescriptionModel.findByIdAndDelete({ _id: id });
      if (!prescription) {
        res.status(404).send({ msg: `Prescription with id ${id} not found` });
      }
      res.status(200).send(`Prescription with id ${id} deleted`);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong, unable to Delete." });
    }
  }

module.exports = {
    getAllPrescriptions,
    createPrescription,
    updatePrescription,
    deletePrescription
}