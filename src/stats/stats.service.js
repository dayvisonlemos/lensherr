const uuid = require('uuid/v4');
const repository = require('./stats.repository');

class StatsService {
  save(dna, isMutant) {
    const data = {
      id: uuid(),
      dna: dna.join(''),
      isMutant,
    };
    repository.save(data);
  }

  ratio(a, b) {
    return (b === 0) ? a : parseFloat(`${a / b}`).toFixed(1) * 1;
  }

  async stats() {
    const countMutantDna = await repository.countMutantDna();
    const countHumanDna = await repository.countHumanDna();
    return {
      count_mutant_dna: countMutantDna,
      count_human_dna: countHumanDna,
      ratio: this.ratio(countMutantDna, countHumanDna),
    };
  }
}

module.exports = new StatsService();
