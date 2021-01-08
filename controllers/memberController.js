const MemberModel = require('../models/memberModel');

exports.getAllMembers = async (req, res) => {
    const members = await MemberModel.find().populate('eventsAttendances');
    res.status(201).send(members);
};

exports.getMemberById = async (req, res) => {
    const { id } = req.params;
    const memberDoc = await MemberModel.findById(id);

    res.send(memberDoc);
}

exports.getMembersBySearch = async (req, res) => {
    const members = await MemberModel.find(req.query);
    res.status(201).send(members);
}

exports.insertMember = async (req, res) => {
    const memberData = req.body;
    const memberModel = new MemberModel(memberData);
    const memberDoc = await memberModel.save();
    
    res.send(memberDoc);
}

exports.updateMember = async (req, res) => {
    const { id } = req.params;
    const dataToUpdate = req.body;

    await MemberModel.findByIdAndUpdate(id, dataToUpdate);

    res.sendStatus(200);
}

exports.deleteMember = async (req, res) => {
    const { id } = req.params;
    await MemberModel.findByIdAndDelete(id);
    res.sendStatus(200);
}