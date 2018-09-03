/* global expect request */

describe('Mutant Controller', () => {
  it('should throw an error in case of an incorrect DNA sequence', (done) => {
    const dna = {
      dna: ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCSCCT', 'TCACTG'],
    };
    request.post('/mutant')
      .send(dna)
      .end((err, res) => {
        const result = res.body;
        expect(res.badRequest).to.be.equal(true);
        expect(result.error).to.be.equal('There is an error in this DNA sequence. Not alowed chars.');
        done(err);
      });
  });

  it('should throw an error if the sequence is not a NxN utilities', (done) => {
    const dna = {
      dna: ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG'],
    };
    request.post('/mutant')
      .send(dna)
      .end((err, res) => {
        const result = res.body;
        expect(res.badRequest).to.be.equal(true);
        expect(result.error).to.be.equal('There is an error in this DNA sequence. Not a quadract matrix.');
        done(err);
      });
  });

  it('should return True when a mutant DNA is passed just in lines', (done) => {
    const dna = {
      dna: ['ATGCGA', 'CATTTT', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'],
    };
    request.post('/mutant')
      .send(dna)
      .end((err, res) => {
        const result = res.body;
        expect(res.ok).to.be.equal(true);
        expect(result).to.be.equal('You are a god among insects. Never let anyone tell you different.');
        done(err);
      });
  });

  it('should return True when all dna are mutant', (done) => {
    const dna = {
      dna: ['AAAAAA', 'TTTTTT', 'CCCCCC', 'GGGGGG', 'ATCGAT', 'ATCGAT'],
    };
    request.post('/mutant')
      .send(dna)
      .end((err, res) => {
        const result = res.body;
        expect(res.ok).to.be.equal(true);
        expect(result).to.be.equal('You are a god among insects. Never let anyone tell you different.');
        done(err);
      });
  });

  it('should return True when a mutant DNA is passed just in column', (done) => {
    const dna = {
      dna: ['ATGCGA', 'CATTCT', 'TAATGG', 'AAATGG', 'CATCTG', 'TCACTG'],
    };
    request.post('/mutant')
      .send(dna)
      .end((err, res) => {
        const result = res.body;
        expect(res.ok).to.be.equal(true);
        expect(result).to.be.equal('You are a god among insects. Never let anyone tell you different.');
        done(err);
      });
  });

  it('should return True when a mutant DNA is passed just in transversal position', (done) => {
    const dna = {
      dna: ['ATGCGA', 'CATGCT', 'TAATGG', 'ATGAGG', 'CATCTC', 'TCACTG'],
    };
    request.post('/mutant')
      .send(dna)
      .end((err, res) => {
        const result = res.body;
        expect(res.ok).to.be.equal(true);
        expect(result).to.be.equal('You are a god among insects. Never let anyone tell you different.');
        done(err);
      });
  });

  it('should return True when a mutant DNA is passed just in transversal position (reverse t-b)', (done) => {
    const dna = {
      dna: ['ACTTCT', 'TATAAC', 'GTAATC', 'TTCTCC', 'GCGCTT', 'ATCGCC'],
    };
    request.post('/mutant')
      .send(dna)
      .end((err, res) => {
        const result = res.body;
        expect(res.ok).to.be.equal(true);
        expect(result).to.be.equal('You are a god among insects. Never let anyone tell you different.');
        done(err);
      });
  });

  it('should return True when a mutant DNA is passed just in transversal position (reverse b-t)', (done) => {
    const dna = {
      dna: ['ACTTCT', 'TATAAC', 'GTAATC', 'TGCTCC', 'GCGCTT', 'ATCGCC'],
    };
    request.post('/mutant')
      .send(dna)
      .end((err, res) => {
        const result = res.body;
        expect(res.ok).to.be.equal(true);
        expect(result).to.be.equal('You are a god among insects. Never let anyone tell you different.');
        done(err);
      });
  });

  it('should return True when a mutant DNA is passed in line and column', (done) => {
    const dna = {
      dna: ['ATGCGA', 'CATTCT', 'TCGGGG', 'AAATGG', 'CATCTG', 'TCACTG'],
    };
    request.post('/mutant')
      .send(dna)
      .end((err, res) => {
        const result = res.body;
        expect(res.ok).to.be.equal(true);
        expect(result).to.be.equal('You are a god among insects. Never let anyone tell you different.');
        done(err);
      });
  });

  it('should return False if no mutant DNA is passed', (done) => {
    const dna = {
      dna: ['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG'],
    };
    request.post('/mutant')
      .send(dna)
      .end((err, res) => {
        const result = res.body;
        expect(res.forbidden).to.be.equal(true);
        expect(result.error).to.be.equal('This dna sequence does not belong to a mutant.');
        done(err);
      });
  });

  it('should return False if there is no mutant DNA in sequence', (done) => {
    const dna = {
      dna: ['ATGCGA', 'CAGTGC', 'TTATTT', 'TGACGG', 'GCGTAA', 'AAACTG'],
    };
    request.post('/mutant')
      .send(dna)
      .end((err, res) => {
        const result = res.body;
        expect(res.forbidden).to.be.equal(true);
        expect(result.error).to.be.equal('This dna sequence does not belong to a mutant.');
        done(err);
      });
  });
});
