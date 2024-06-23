const express = require("express");
const router = express.Router();

const {
    getAllNurses,
    nurseRegister,
    nurseLogin,
    updateNurse,
    deleteNurse,
  } = require('../controllers/nurse')

router.route('/').get(getAllNurses)
router.route('/register').post(nurseRegister)
router.route('/login').post(nurseLogin)
router.route('/:nurseId').patch(updateNurse)
router.route('/:nurseId').delete(deleteNurse)

module.exports = router
