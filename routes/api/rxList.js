const express = require('express');
const router = express.Router();
const rxListCtrl = require('../../controllers/rxList');
const addRxCtrl = require('../../controllers/addRx');

router.post('/RxList', rxListCtrl.index)
router.post('/AddRx', addRxCtrl.create)

module.exports = router;