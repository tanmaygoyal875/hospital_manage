const express = require("express");
const router = express.Router();

const {
    getAllPrescriptions,
    createPrescription,
    updatePrescription,
    deletePrescription
} = require('../controllers/prescription')

router.route('/').get(getAllPrescriptions)
router.route('/create').post(createPrescription)
router.route('/:prescriptionId').patch(updatePrescription)
router.route('/:prescriptionId').delete(deletePrescription)

module.exports = router