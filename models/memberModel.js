const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: String,
        enum : ["Active","InActive"],
        default: "Active"
    },
    joinedDate: {
        required: false,
        type: String
    },
    eventsAttendance: [{
        type: mongoose.Types.ObjectId,
        ref: 'Attendance'
      }]
});

const memberModel = mongoose.model('Member', memberSchema);

module.exports = memberModel;