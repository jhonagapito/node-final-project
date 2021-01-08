const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },
    startDate:{
        required: true,
        type: String
    },
    endDate: {
        required: true,
        type: String
    },
    membersAttendance:  [{
        type: mongoose.Types.ObjectId,
        ref: 'Attendance'
      }]
});

const eventModel = mongoose.model('Event', eventSchema);

module.exports = eventModel;