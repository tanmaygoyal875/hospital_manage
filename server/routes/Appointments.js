const express = require("express");
const router = express.Router();

const {
    getAllAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment
} = require('../controllers/appointment')

router.route('/').get(getAllAppointments)
router.route('/create').post(createAppointment)
router.route('/:appointmentId').patch(updateAppointment)
router.route('/:appointmentId').delete(deleteAppointment)

module.exports = router