const express = require("express");
const { NurseModel } = require("../models/nurseModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const getAllNurses = async (req, res) => {
    try {
      const nurses = await NurseModel.find();
      res.status(200).send(nurses);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong" });
    }
  }

const nurseRegister =  async (req, res) => {
    const { email } = req.body;
    try {
      const nurse = await NurseModel.findOne({ email });
      if (nurse) {
        return res.send({
          message: "Nurse already exists",
        });
      }
      let value = new NurseModel(req.body);
      // console.log(value)
      await value.save();
      const data = await NurseModel.findOne({ email });
      return res.send({ data, message: "Registered" });
    } catch (error) {
      res.send({ message: "error" });
    }
  }

const nurseLogin =  async (req, res) => {
    const { nurseID, password } = req.body;
    try {
      const nurse = await NurseModel.findOne({ nurseID, password });
  
      if (nurse) {
        const token = jwt.sign({ foo: "bar" }, process.env.KEY, {
          expiresIn: "24h",
        });
        res.send({ message: "Successful", user: nurse, token: token });
      } else {
        res.send({ message: "Wrong credentials" });
      }
    } catch (error) {
      console.log({ message: "Error" });
      console.log(error);
    }
  }

const updateNurse = async (req, res) => {
    const id = req.params.nurseId;
    const payload = req.body;
    try {
      await NurseModel.findByIdAndUpdate({ _id: id }, payload);
      const nurse = await NurseModel.findById(id);
      if (!nurse) {
        return res.status(404).send({ message: `Nurse with id ${id} not found` });
      }
      res.status(200).send({ message: `Nurse Updated`, user: nurse });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong, unable to Update." });
    }
  }

const deleteNurse = async (req, res) => {
    const id = req.params.nurseId;
    try {
      const nurse = await NurseModel.findByIdAndDelete({ _id: id });
      if (!nurse) {
        res.status(404).send({ msg: `Nurse with id ${id} not found` });
      }
      res.status(200).send(`Nurse with id ${id} deleted`);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong, unable to Delete." });
    }
  }

module.exports = {
    getAllNurses,
    nurseRegister,
    nurseLogin,
    updateNurse,
    deleteNurse
}