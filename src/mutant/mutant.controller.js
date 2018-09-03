const MutantService = require('./mutant.service');
const ForbiddenError = require('../exception/forbidden.error');
const { errorHandler } = require('../exception/error.handler');

class MutantController {
  verifyDNAMutant(req, res) {
    try {
      const mutantService = new MutantService();
      const { dna } = req.body;
      const result = mutantService.isMutant(dna);
      if (!result) throw new ForbiddenError('This dna sequence does not belong to a mutant.');
      return res.json('You are a god among insects. Never let anyone tell you different.');
    } catch (err) {
      return errorHandler(err, res);
    }
  }
}

module.exports = new MutantController();
