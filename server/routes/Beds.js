const express = require("express");
const router = express.Router();

const {
    getAllBeds,
    checkAvailability,
    addBed,
    updateBed,
    dischargeBed,
    deleteBed
} = require('../controllers/beds')

router.route('/').get(getAllBeds)
router.route('/single').post(checkAvailability)
router.route('/add').post(addBed)
router.route('/:bedId').patch(updateBed)
router.route('/discharge').put(dischargeBed)
router.route('/:bedId').delete(deleteBed)

module.exports = router