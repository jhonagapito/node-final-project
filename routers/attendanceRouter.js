const express = require('express');
const attendanceController = require('../controllers/attendanceController');

const router = express.Router();

router.get('/', attendanceController.getAllAttendances);
router.get('/:id', attendanceController.getAttendanceById);
router.post('/', attendanceController.InsertAttendance);
router.put('/:id', attendanceController.updateAttendance);
router.delete('/:id', attendanceController.deleteAttendance);

module.exports = router;