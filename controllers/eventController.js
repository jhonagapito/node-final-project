const EventModel = require('../models/eventModel');

exports.getAllEvents = async (req, res) => {
    const events = await EventModel.find().populate('membersAttendances');
    res.send(events);
};

exports.getEventById = async (req, res) => {
    const { id } = req.params;

    const eventDoc = await EventModel.findById(id);

    res.send(eventDoc);
};

exports.getEventsBySearch = async (req, res) => {
    const events = await EventModel.find(req.query);
    res.send(events);
}

exports.insertEvent = async (req, res) => {
    const eventData = req.body;
    const eventModel = new EventModel(eventData);
    const eventDoc = await eventModel.save();

    res.status(201).send(eventDoc);
};

exports.updateEvent = async (req, res) => {
    const { id } = req.params;
    const dataToUpdate = req.body;

    await EventModel.findByIdAndUpdate(id, dataToUpdate);

    res.sendStatus(200);
};

exports.deleteEvent = async (req, res) => {
    const { id } = req.params;

    await EventModel.findByIdAndDelete(id);

    res.sendStatus(200);
};