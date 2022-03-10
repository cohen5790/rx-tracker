const express = require('express');
const router = express.Router();
const rxScheduleCtrl = require('../../controllers/RxSchedule');
const addRxCtrl = require('../../controllers/AddRx');

router.post('/RxList', rxScheduleCtrl.index)
router.post('/AddRx', addRxCtrl.create)
router.post('/AddRx', addRxCtrl.addRxToList)

module.exports = router;