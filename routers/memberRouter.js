const express = require('express');
const memberController = require('../controllers/memberController');

const router = express.Router();

router.get('/', memberController.getAllMembers);
router.get('/search', memberController.getMembersBySearch);
router.get('/:id', memberController.getMemberById);
router.post('/', memberController.insertMember);
router.put('/:id', memberController.updateMember);
router.delete('/:id', memberController.deleteMember);

module.exports = router;