const express  = require('express');
require("dotenv").config();

const router = express.Router();

const {
    getAdmin,
    adminRegister,
    adminLogin,
    updateAdmin,
    deleteAdmin,
    sendEmail,
    forgotPassword
  } = require('../controllers/admin')

router.route('/').get(getAdmin)
router.route('/register').post(adminRegister)
router.route('/login').post(adminLogin)
router.route('/:adminId').patch(updateAdmin)
router.route('/:adminId').delete(deleteAdmin)
router.route('/password').post(sendEmail)
router.route('/forgot').post(forgotPassword)

module.exports = router