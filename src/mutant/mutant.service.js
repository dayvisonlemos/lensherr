const matrix = require('../utilities/matrix');

module.exports = class MutantService {
  constructor() {
    this.allowedChar = /^[A|T|C|G|. ]+$/;
    this.pattern = /((A+){4}|(T+){4}|(C+){4}|(G+){4})/g;
  }

  analizeSequence(sequence) {
    const match = sequence.match(this.pattern);
    return match ? match.length : 0;
  }

  isMutant(dna) {
    const dnaMatrix = matrix.fromDnaSequence(dna);

    if (!matrix.isQuadratic(dnaMatrix)) throw new Error('There is an error in this DNA sequence. Not a NxN utilities.');

    let sequence = matrix.toString(dnaMatrix);

    if (!this.allowedChar.test(sequence)) throw new Error('There is an error in this DNA sequence. Not alowed chars.');

    const transposed = matrix.transpose(dnaMatrix);
    const transversed = matrix.transverse(dnaMatrix);

    sequence = `${sequence} ${matrix.toString(transposed)} ${matrix.toString(transversed)}`;
    const countDnaMutant = this.analizeSequence(sequence);

    return countDnaMutant > 1;
  }
};
