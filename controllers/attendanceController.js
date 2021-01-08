const AttendanceModel = require('../models/attendanceModel');
const EventModel = require('../models/eventModel');
const MemberModel = require('../models/memberModel');


exports.getAllAttendances = async (req, res) => {
    const attendances = await AttendanceModel.find().populate('member').populate('event');

    res.send(attendances);
}

exports.getAttendanceById = async (req, res) => {
    const { id } = req.params;
    const attendanceDoc = await AttendanceModel.findById(id);

    res.send(attendanceDoc);
}

exports.InsertAttendance = async (req, res) => {
    const attendanceData = req.body;
    const eventData = await EventModel.findById(attendanceData.eventId);
    const memberData = await MemberModel.findById(attendanceData.memberId);

    const attendanceModel = new AttendanceModel({
        event: eventData,
        member: memberData,
        timeIn: attendanceData.timeIn,
        timeOut: attendanceData.timeOut
    });

    const attendanceDoc = await attendanceModel.save();

    res.status(201).send(attendanceDoc);
}

exports.updateAttendance = async (req, res) => {
    const { id } = req.params;
    const attendanceData = req.body;
    const eventData = await EventModel.findById(attendanceData.eventId);
    const memberData = await MemberModel.findById(attendanceData.memberId);

    await AttendanceModel.findByIdAndUpdate(id, {
        event: eventData,
        member: memberData,
        timeIn: attendanceData.timeIn,
        timeOut: attendanceData.timeOut
    });

    res.sendStatus(200);
}

exports.deleteAttendance = async (req, res) => {
    const { id } = req.params;
    await AttendanceModel.findByIdAndDelete(id);

    res.sendStatus(200);
}