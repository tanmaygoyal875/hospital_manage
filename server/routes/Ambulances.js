const express = require("express");
const router = express.Router();

const {
    getAmbulance,
    addAmbulance,
    updateAmbulance,
    deleteAmbulance
  } = require('../controllers/ambulance')

router.route('/').get(getAmbulance)
router.route('/add').post(addAmbulance)
router.route('/:ambulanceId').patch(updateAmbulance)
router.route('/:ambulanceId').delete(deleteAmbulance)

module.exports = router
