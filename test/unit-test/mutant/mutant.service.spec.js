const mutantService = require('../../../src/mutant/mutant.service');

describe('Mutant Service', () => {
  it('should throw an error in case of an incorrect DNA sequence', () => {
    const sequence = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCSCCT', 'TCACTG'];
    expect(() => mutantService.isMutant(sequence)).to.throw('Peace was never an option. Invalid characters in the dna sequence.');
  });

  it('should throw an error if the sequence is not a NxN utilities', () => {
    const sequence = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG'];
    expect(() => mutantService.isMutant(sequence)).to.throw('You "homo sapiens" and your guns!. This is not a square matrix.');
  });

  it('should return True when a mutant DNA is passed just in lines', () => {
    const sequence = ['ATGCGA', 'CATTTT', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];
    const result = mutantService.isMutant(sequence);
    expect(result).to.be.equal(true);
  });

  it('should return True when all dna are mutant', () => {
    const sequence = ['AAAAAA', 'TTTTTT', 'CCCCCC', 'GGGGGG', 'ATCGAT', 'ATCGAT'];
    const result = mutantService.isMutant(sequence);
    expect(result).to.be.equal(true);
  });

  it('should return True when a mutant DNA is passed just in column', () => {
    const sequence = ['ATGCGA', 'CATTCT', 'TAATGG', 'AAATGG', 'CATCTG', 'TCACTG'];
    const result = mutantService.isMutant(sequence);
    expect(result).to.be.equal(true);
  });

  it('should return True when a mutant DNA is passed just in transversal position', () => {
    const sequence = ['ATGCGA', 'CATGCT', 'TAATGG', 'ATGAGG', 'CATCTC', 'TCACTG'];
    const result = mutantService.isMutant(sequence);
    expect(result).to.be.equal(true);
  });

  it('should return True when a mutant DNA is passed just in transversal position (reverse t-b)', () => {
    const sequence = ['ACTTCT', 'TATAAC', 'GTAATC', 'TTCTCC', 'GCGCTT', 'ATCGCC'];
    const result = mutantService.isMutant(sequence);
    expect(result).to.be.equal(true);
  });

  it('should return True when a mutant DNA is passed just in transversal position (reverse b-t)', () => {
    const sequence = ['ACTTCT', 'TATAAC', 'GTAATC', 'TGCTCC', 'GCGCTT', 'ATCGCC'];
    const result = mutantService.isMutant(sequence);
    expect(result).to.be.equal(true);
  });

  it('should return True when a mutant DNA is passed in line and column', () => {
    const sequence = ['ATGCGA', 'CATTCT', 'TCGGGG', 'AAATGG', 'CATCTG', 'TCACTG'];
    const result = mutantService.isMutant(sequence);
    expect(result).to.be.equal(true);
  });

  it('should return False if a no mutant DNA is passed', () => {
    const sequence = ['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG'];
    const result = mutantService.isMutant(sequence);
    expect(result).to.be.equal(false);
  });
});
