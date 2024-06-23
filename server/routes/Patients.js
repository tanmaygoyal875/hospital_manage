const express = require("express");
const router = express.Router();

const {
    getAllPatients,
    patientRegister,
    patientLogin,
    updatePatient,
    deletePatient,
  } = require('../controllers/patient')

router.route('/').get(getAllPatients)
router.route('/register').post(patientRegister)
router.route('/login').post(patientLogin)
router.route('/:patientId').patch(updatePatient)
router.route('/:patientId').delete(deletePatient)

module.exports = router
