const express = require('express');
const router = express.Router();
const rxListCtrl = require('../../controllers/RxList');
const addRxCtrl = require('../../controllers/AddRx');

router.post('/RxList', rxListCtrl.index)
router.post('/AddRx', addRxCtrl.addRxToList)

module.exports = router;