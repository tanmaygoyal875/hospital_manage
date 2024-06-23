const express = require("express");
require("dotenv").config();

const router = express.Router();

const {
    getDoctors,
    doctorRegister,
    doctorLogin,
    updateDoctor,
    deleteDoctor
  } = require('../controllers/doctors')

router.route('/').get(getDoctors)
router.route('/register').post(doctorRegister)
router.route('/login').post(doctorLogin)
router.route('/:doctorId').patch(updateDoctor)
router.route('/:doctorId').delete(deleteDoctor)

module.exports = router
