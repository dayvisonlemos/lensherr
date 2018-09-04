const { Router } = require('express');
const controller = require('./stats.controller');

const router = Router();

router.get('/stats', controller.stats);

module.exports = router;
