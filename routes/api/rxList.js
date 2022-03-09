const express = require('express');
const router = express.Router();
const rxListCtrl = require('../../controllers/rxList');

router.post('/', rxListCtrl.index)

module.exports = router;