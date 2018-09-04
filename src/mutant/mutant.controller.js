const mutantService = require('./mutant.service');
const statsService = require('../stats/stats.service');
const ForbiddenError = require('../exception/forbidden.error');
const { errorHandler } = require('../exception/error.handler');

class MutantController {
  verifyDNAMutant(req, res) {
    try {
      const { dna } = req.body;
      const result = mutantService.isMutant(dna);
      statsService.save(dna, result);
      if (!result) throw new ForbiddenError('Toad has a wicked tongue Senator, just like you.');
      return res.json('You are a god among insects. Never let anyone tell you different.');
    } catch (err) {
      return errorHandler(err, res);
    }
  }
}

module.exports = new MutantController();
