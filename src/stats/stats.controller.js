const statsService = require('./stats.service');

class StatsController {
  async stats(req, res) {
    const result = await statsService.stats();
    return res.json(result);
  }
}

module.exports = new StatsController();
