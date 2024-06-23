const express = require("express");
const router = express.Router();

const {
    getAllReports,
    createReport,
    updateReport,
    deleteReport
} = require('../controllers/report')

router.route('/').get(getAllReports)
router.route('/create').post(createReport)
router.route('/:reportId').patch(updateReport)
router.route('/:reportId').delete(deleteReport)

module.exports = router