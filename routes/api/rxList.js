const express = require('express');
const router = express.Router();
const rxScheduleCtrl = require('../../controllers/RxSchedule');
const rxListCtrl = require('../../controllers/RxList');

router.post('/RxSchedule', rxScheduleCtrl.index)
router.post('/RxList', rxListCtrl.create)
router.post('/RxList', rxListCtrl.addRxToList)

module.exports = router;