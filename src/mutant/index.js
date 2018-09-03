const { Router } = require('express');
const controller = require('./mutant.controller');

const router = Router();

router.post('/mutant', controller.verifyDNAMutant);

module.exports = router;
