const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    event: {
        required: true,
        type: mongoose.Types.ObjectId,
        ref: 'Event'
    },
    member: {
        required: true,
        type: mongoose.Types.ObjectId,
        ref: 'Member'
    },
    timeIn: {
        required: true,
        type: String
    },
    timeOut:  {
        required: false,
        type: String
    }
});

const attendanceModel = mongoose.model('Attendance', attendanceSchema);

module.exports = attendanceModel;