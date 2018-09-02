const MutantService = require('../../../src/mutant/mutant.service');

describe('Mutant Service', () => {

  let mutantService;

  beforeEach(() => {
    mutantService = new MutantService();
  });

  it('should throw an error in case of an incorrect DNA sequence', () => {
    const sequence = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCSCCTA", "TCACTG"];
    expect(() => mutantService.isMutant(sequence)).to.throw('There is an error in this DNA sequence. Not alowed chars.');
  });

  it('should throw an error if the sequence is not a NxN matrix', () => {
    const sequence = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG"];
    expect(() => mutantService.isMutant(sequence)).to.throw('There is an error in this DNA sequence. Not a NxN matrix.');
  });

  it('should return True when a mutant DNA is passed just in lines', () => {
    const sequence = ["ATGCGA", "CATTTT", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];
    const result = mutantService.isMutant(sequence);
    expect(result).to.be.true;
  });

  it('should return True when all dna are mutant', () => {
    const sequence = ["AAAAAA", "TTTTTT", "CCCCCC", "GGGGGG", "ATCGAT", "ATCGAT"];
    const result = mutantService.isMutant(sequence);
    expect(result).to.be.true;
  });

  it('should return True when a mutant DNA is passed just in column', () => {
    const sequence = ["ATGCGA", "CATTCT", "TAATGG", "AAATGG", "CATCTG", "TCACTG"];
    const result = mutantService.isMutant(sequence);
    expect(result).to.be.true;
  });

  it('should return True when a mutant DNA is passed just in transversal position', () => {
    const sequence = ['ATGCGA', 'CATGCT', 'TAATGG', 'ATGAGG', 'CATCTC', 'TCACTG'];
    const result = mutantService.isMutant(sequence);
    expect(result).to.be.true;
  });

  it('should return True when a mutant DNA is passed just in transversal position (reverse t-b)', () => {
    const sequence = ['ACTTCT', 'TATAAC', 'GTAATC', 'TTCTCC', 'GCGCTT', 'ATCGCC'];
    const result = mutantService.isMutant(sequence);
    expect(result).to.be.true;
  });

  it('should return True when a mutant DNA is passed just in transversal position (reverse b-t)', () => {
    const sequence = ['ACTTCT', 'TATAAC', 'GTAATC', 'TGCTCC', 'GCGCTT', 'ATCGCC'];
    const result = mutantService.isMutant(sequence);
    expect(result).to.be.true;
  });

  it('should return True when a mutant DNA is passed in line and column', () => {
    const sequence = ["ATGCGA", "CATTCT", "TCGGGG", "AAATGG", "CATCTG", "TCACTG"];
    const result = mutantService.isMutant(sequence);
    expect(result).to.be.true;
  });

});
