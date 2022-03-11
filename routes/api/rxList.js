const express = require('express');
const router = express.Router();
// const rxScheduleCtrl = require('../../controllers/RxSchedule');
const rxListCtrl = require('../../controllers/RxList');

// router.post('/RxSchedule', rxScheduleCtrl.index)

router.use(require('../../config/auth'));
router.post('/RxList', rxListCtrl.createRx)

module.exports = router;