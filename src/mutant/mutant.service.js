const BadRequestError = require('../exception/badrequest.error');
const matrix = require('../utilities/matrix');

class MutantService {
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
    if (!matrix.isQuadratic(dnaMatrix)) throw new BadRequestError('You "homo sapiens" and your guns!. This is not a square matrix.');

    let sequence = matrix.toString(dnaMatrix);

    if (!this.allowedChar.test(sequence)) throw new BadRequestError('Peace was never an option. Invalid characters in the dna sequence.');

    let countDnaMutant = this.analizeSequence(sequence);
    if (countDnaMutant > 1) return true;

    const transposed = matrix.transpose(dnaMatrix);
    sequence = matrix.toString(transposed);
    countDnaMutant += this.analizeSequence(sequence);
    if (countDnaMutant > 1) return true;

    const transversed = matrix.transverse(dnaMatrix);
    sequence = matrix.toString(transversed);
    countDnaMutant += this.analizeSequence(sequence);
    if (countDnaMutant > 1) return true;

    return false;
  }
}

module.exports = new MutantService();
