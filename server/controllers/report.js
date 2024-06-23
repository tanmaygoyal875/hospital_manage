const express = require("express");
const { ReportModel } = require("../models/reportModel");

const getAllReports = async (req, res) => {
    let query = req.query;
    try {
      const reports = await ReportModel.find(query);
      res.status(200).send(reports);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong" });
    }
  }

const createReport = async (req, res) => {
    const payload = req.body;
    try {
      const report = new ReportModel(payload);
      await report.save();
      res.send({ message: "Report successfully created", report });
    } catch (error) {
      res.send(error);
    }
  }

const updateReport = async (req, res) => {
    const id = req.params.reportId;
    const payload = req.body;
    try {
      const report = await ReportModel.findByIdAndUpdate({ _id: id }, payload);
      if (!report) {
        res.status(404).send({ msg: `Report with id ${id} not found` });
      }
      res.status(200).send(`Report with id ${id} updated`);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong, unable to Update." });
    }
  }


const deleteReport = async (req, res) => {
    const id = req.params.reportId;
    try {
      const report = await ReportModel.findByIdAndDelete({ _id: id });
      if (!report) {
        res.status(404).send({ msg: `Report with id ${id} not found` });
      }
      res.status(200).send(`Report with id ${id} deleted`);
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Something went wrong, unable to Delete." });
    }
  }

module.exports = {
    getAllReports,
    createReport,
    updateReport,
    deleteReport
}
