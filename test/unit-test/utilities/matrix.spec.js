const matrix = require('../../../src/utilities/matrix');

describe('Matrix', () => {
  it('shoud return a matrix from a dna sequence', () => {
    const dna = ["AAAA", "CCCC", "TTTT", "GGGG"];
    const expected = [
      ['A', 'A', 'A', 'A'],
      ['C', 'C', 'C', 'C'],
      ['T', 'T', 'T', 'T'],
      ['G', 'G', 'G', 'G']
    ];

    const result = matrix.fromDnaSequence(dna);

    expect(result).to.deep.equal(expected);
  });

  it('should return a transposed matrix', () => {
    const defaultMatrix = [
      ['A', 'A', 'A', 'A'],
      ['C', 'C', 'C', 'C'],
      ['T', 'T', 'T', 'T'],
      ['G', 'G', 'G', 'G']
    ];
    const expected = [
      ['A', 'C', 'T', 'G'],
      ['A', 'C', 'T', 'G'],
      ['A', 'C', 'T', 'G'],
      ['A', 'C', 'T', 'G']
    ];

    const transposed = matrix.transpose(defaultMatrix);

    expect(transposed).to.deep.equal(expected);
  });

  it('should return a transversed matrix', () => {
    const defaultMatrix = [
      ['A', 'B', 'C', 'D'],
      ['E', 'F', 'G', 'H'],
      ['I', 'J', 'K', 'L'],
      ['M', 'N', 'O', 'P']
    ];
    const expected = [
      ['A', 'F', 'K', 'P'],
      ['D', 'G', 'J', 'M'],
      ['B', 'G', 'L'],
      ['E', 'J', 'O'],
      ['H', 'K', 'N'],
      ['C', 'F', 'I'],
      ['C', 'H'],
      ['I', 'N'],
      ['L', 'O'],
      ['B', 'E'],
      ['D'],
      ['M'],
      ['P'],
      ['A'],
    ];

    const transversed = matrix.transverse(defaultMatrix);

    expect(transversed).to.deep.equal(expected);
  });

  it('shoud return a string of a default matrix', () => {
    const defaultMatrix = [
      ['A', 'A', 'A', 'A'],
      ['C', 'C', 'C', 'C'],
      ['T', 'T', 'T', 'T'],
      ['G', 'G', 'G', 'G']
    ];

    const result = matrix.toString(defaultMatrix);

    expect(result).to.be.equal('AAAA CCCC TTTT GGGG');
  });

  it('shoud return a string of a trasposed matrix', () => {
    const trasposed = [
      ['A', 'C', 'T', 'G'],
      ['A', 'C', 'T', 'G'],
      ['A', 'C', 'T', 'G'],
      ['A', 'C', 'T', 'G']
    ];

    const result = matrix.toString(trasposed);

    expect(result).to.be.equal('ACTG ACTG ACTG ACTG');
  });

  it('shoud return a string of a transversed matrix', () => {
    const transversed = [
      ['A', 'F', 'K', 'P'],
      ['D', 'G', 'J', 'M'],
      ['B', 'G', 'L'],
      ['E', 'J', 'O'],
      ['H', 'K', 'N'],
      ['C', 'F', 'I'],
      ['C', 'H'],
      ['I', 'N'],
      ['L', 'O'],
      ['B', 'E'],
      ['D'],
      ['M'],
      ['P'],
      ['A']
    ];

    const result = matrix.toString(transversed);

    expect(result).to.be.equal('AFKP DGJM BGL EJO HKN CFI CH IN LO BE D M P A');
  });

  it('shoud return true if a matrix quadratic', () => {
    const defaultMatrix = [
      ['A', 'B', 'C', 'D'],
      ['E', 'F', 'G', 'H'],
      ['I', 'J', 'K', 'L'],
      ['M', 'N', 'O', 'P']
    ];

    const result = matrix.isQuadratic(defaultMatrix);

    expect(result).to.be.true;
  });

  it('shoud return false if a matrix is not quadratic', () => {
    const defaultMatrix = [
      ['A', 'B', 'C'],
      ['E', 'F', 'G'],
      ['I', 'J', 'K'],
      ['M', 'N', 'O']
    ];

    const result = matrix.isQuadratic(defaultMatrix);

    expect(result).to.not.be.true;
  });

});
