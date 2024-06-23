const express = require("express");
const router = express.Router();

const {
    getPayments,
    addPayment,
    updatePayment,
    deletePayment
} = require('../controllers/payments')

router.route('/').get(getPayments);
router.route('/add').post(addPayment);
router.route('/:paymentId').patch(updatePayment)
router.route('/:paymentId').delete(deletePayment)

module.exports = router;