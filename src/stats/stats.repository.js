const { Stats } = require('../models');

class StatsRepository {
  save(data) {
    return Stats.create(data);
  }

  count(isMutant) {
    const where = { isMutant };
    return Stats.count({ where });
  }

  countMutantDna() {
    return this.count(true);
  }

  countHumanDna() {
    return this.count(false);
  }
}

module.exports = new StatsRepository();
