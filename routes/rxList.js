const express = require('express');
const router = express.Router();
const orderCtrl = require('../../controllers/rxList');

router.post('/', rxCtrl.create)

module.exports = router;